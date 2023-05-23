# Exercício 1

Criei um arquivo HTML, criei um servidor ```httpd:2.4.54```  e vinculei a porta interna com uma porta local.

```docker run -d --name site-trybe -p 4545:80 -v "$(pwd):/usr/local/apache2/htdocs" httpd:2.4.54```
