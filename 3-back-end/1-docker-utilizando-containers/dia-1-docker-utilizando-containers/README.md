# Dia 1 - Utilizando Containers - Docker

Aprendi o conceito de Docker, de Registry, as definições de imagem e container, alguns comandos básicos e avançados.

## Exercícios

1. Pesquisar e baixar imagens no [Docker Hub](https://hub.docker.com/search?q=&type=image).
2. Criar e executar containers.
3. Rodar comandos nos terminais de um container.
4. Passar diferentes tags na criação de um container.
5. Remover um container e uma imagem.
6. Bônus: Rodar um container da imagem andrius/ascii-patrol.

## Comandos

- `docker -v` - versão do docker
- `docker ps -a` || `docker container ls -a` - mostra todos os containers
- `docker container run hello-world` - procura e cria uma imagem
- `docket run -it ubuntu bash` - chama a imagem e executa, abrindo o terminal interativamente
    - `cat /etc/os-release` - mostra a versão da distro
    - comandos do linux em geral
- `docker container start <name || id>` -  liga o container
- `docker container attach <name || id>` - abrir, acoplar, rodar o terminal do cotainer,  o bash principal
    - ctrl p - ctrl q, sair do container sem fechar
- `docker container create -it ubuntu`  - criar container interativo através do terminal - MUITO IMPORTANTE
- `docker container run -it --name ubuntu ubuntu bash` - dar um nome ao container
- `docker container run --name container -itd ubuntu` - faz o container rodar mas em segundo plano
- `docker container stop container` - parar o container
- `docker container start container` - starta o container
- `docker container restart container` - restarta o container
- `docker logs meu-container` - mostra os logs do container
- `docker container rm meu-container` - remove um container que não está up
    - `docker container rm -f meu-container`- remove forçadamente um container.
- `docker container prune` - remove TODOS OS CONTAINERS PARADOS
- `docker container exec -it container-name bash` - abre OUTRO bash no container