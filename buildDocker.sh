#!/bin/bash
_now=`date "+%Y%m%d_%H_%M"`
docker_name=zphk/bretton-official
echo build docker image version:$_now
docker build -t $docker_name:$_now ./
echo tag docker image latest
docker tag $docker_name:$_now $docker_name:latest
echo push docker images
docker push $docker_name:$_now
docker push $docker_name:latest
echo delete build docker image
docker rmi $docker_name:$_now
