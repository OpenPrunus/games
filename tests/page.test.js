import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const { DICT } = await import(path.join(ROOT, 'js/main.js'));

test('le français et l\'anglais ont les mêmes clés, toutes non vides, avec les mêmes variables', () => {
  assert.deepEqual(Object.keys(DICT.fr).sort(), Object.keys(DICT.en).sort());
  for (const lang of Object.keys(DICT)) for (const [k, v] of Object.entries(DICT[lang])) assert.ok(v.trim().length > 0, `${lang}.${k}`);
});

test('toutes les clés utilisées par la page existent', () => {
  const used = [...html.matchAll(/data-i18n(?:-html)?="(\w+)"/g)].map((m) => m[1]);
  assert.ok(used.length > 30, `${used.length} clés`);
  for (const k of used) assert.ok(k in DICT.fr, `clé inconnue : ${k}`);
});

test('toutes les ressources locales existent', () => {
  const refs = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => m[1]).filter((r) => !r.startsWith('/') || r.length > 1);
  assert.ok(refs.length >= 6);
  for (const r of refs) assert.ok(fs.existsSync(path.join(ROOT, r)), `ressource manquante : ${r}`);
  for (const r of ['assets/og.png', 'favicon.svg']) assert.ok(fs.existsSync(path.join(ROOT, r)), r);
});

test('les six jeux sont présentés, avec leur lien de jeu et leur dépôt', () => {
  for (const [site, repo] of [['blockfall', 'blockfall'], ['hillshot', 'hillshot'], ['gloopvolley', 'gloop-volley'], ['chickenchallenge', 'chicken-challenge'], ['knockknock', 'knock-knock'], ['cliffwalkers', 'cliffwalkers']]) {
    assert.match(html, new RegExp(`href="https://${site}\\.prunus\\.dev"`), site);
    assert.match(html, new RegExp(`href="https://github\\.com/OpenPrunus/${repo}"`), repo);
  }
  assert.equal([...html.matchAll(/<article class="card"/g)].length, 6);
});

test('les liens externes s\'ouvrent dans un nouvel onglet sans donner accès à la page', () => {
  const links = [...html.matchAll(/<a [^>]*href="https?:[^>]*>/g)].map((m) => m[0]);
  assert.ok(links.length >= 10);
  for (const a of links) {
    assert.match(a, /target="_blank"/, a);
    assert.match(a, /rel="[^"]*noopener/, a);
  }
});

test('métadonnées : titre, description, partage social, langue, viewport', () => {
  assert.match(html, /<title>Prunus Games<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]{40,}"/);
  assert.match(html, /property="og:image" content="https:\/\/games\.prunus\.dev\/assets\/og\.png"/);
  assert.match(html, /<html lang="fr">/);
  assert.match(html, /name="viewport"/);
});

test('aucun script ni style en ligne (la politique de sécurité du contenu les interdit)', () => {
  assert.doesNotMatch(html.replace(/<script (?:type="module" )?src="[^"]+"(?: defer)?><\/script>/g, ''), /<script/);
  assert.doesNotMatch(html, /<style/);
  assert.doesNotMatch(html, /\sstyle="/);
});

test('la page parle des jeux, pas de leur technique : aucune mention de langage, de serveur ni de « sous le capot »', () => {
  const visible = html.replace(/<svg[\s\S]*?<\/svg>/g, '') + JSON.stringify(DICT);
  assert.doesNotMatch(visible, /sous le capot|under the hood/i);
  assert.doesNotMatch(visible, /\bPHP\b|JavaScript|WebSocket|60\s*Hz|framework|arcade-core/i);
  assert.equal([...html.matchAll(/<section/g)].length, 2, 'le haut de page et les jeux, rien d\'autre');
});
