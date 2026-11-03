FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html favicon.svg manifest.webmanifest sw.js pwa.js /usr/share/nginx/html/
COPY icons/ /usr/share/nginx/html/icons/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY assets/ /usr/share/nginx/html/assets/
EXPOSE 80
