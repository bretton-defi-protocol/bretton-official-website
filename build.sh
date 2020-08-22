#!/bin/bash
_now=`date "+%Y%m%d_%H_%M"`
_version=bretton_official:$_now

function nodejs_build(){
        git pull
        npm install
        npm audit fix
        npm run build
}

function build_docker_image(){
        docker build -t $_version ./
}

function rund_docker(){
        docker rm -f bretton-official
        docker run -it -d  --name bretton-official -p 8002:8002 $_version
}
nodejs_build
build_docker_image 
rund_docker