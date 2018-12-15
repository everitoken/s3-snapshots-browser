FROM nginx:mainline

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY js js/
COPY img img/
COPY css css/
