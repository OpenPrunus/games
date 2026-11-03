# games.prunus.dev

The landing page of the OpenPrunus games: a static page (HTML, CSS and a little JavaScript, no build step) that presents

- [**Cliffwalkers**](https://github.com/OpenPrunus/cliffwalkers) — a puzzle game: give skills to a line of little walkers to lead them to the exit.
- [**Knock Knock**](https://github.com/OpenPrunus/knock-knock) — a memory game with doors that all look different, a bandit and a detective,
  solo, against the computer, on the same screen or online.
- [**Blockfall**](https://github.com/OpenPrunus/blockfall) — a falling-blocks puzzle, solo, against the computer or online,
- [**Hillshot**](https://github.com/OpenPrunus/hillshot) — a turn-based artillery duel across a hill,
- [**Gloop Volley**](https://github.com/OpenPrunus/gloop-volley) — slime volleyball,
- [**Chicken Challenge**](https://github.com/OpenPrunus/chicken-challenge) — a chicken-throwing arcade game,

playable in the browser, on a phone or a computer, with no account.

French and English (browser language, switchable), light and dark theme (system setting, switchable), responsive down to a phone,
no tracking, no external request: fonts are the system's, images are local, and a strict Content-Security-Policy is served.

## Run it

```bash
docker compose up -d --build     # http://localhost:8094
# or, without Docker:
npm run serve
```

## Tests

```bash
npm test      # translations, every key used, local resources, links, metadata, no inline script or style
```

CI also builds the image and checks the page, its assets, the security headers, and that the repository files are not served.

## Update a screenshot

The images in `assets/` are captures (WebP, 1280×720) of the live games; replace the file and keep the name. `assets/og.png` is the
1200×630 image used when the page is shared.

## License

MIT — see [LICENSE](LICENSE).

## Offline

**Installable and playable offline** (PWA): web manifest, icons, and a service worker that serves the last visit's files when there is no network. Solo and computer modes work offline; online play shows a clear message.
