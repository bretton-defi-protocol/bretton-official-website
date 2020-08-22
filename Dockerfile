FROM nginx:1.19.2

ENV DEPLOY_DIR /data/official/html
RUN mkdir -p ${DEPLOY_DIR}
COPY ./dist/ ${DEPLOY_DIR}/
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8002