FROM node:8

ARG ssh_prv_key
ARG ssh_pub_key

ADD . /home/node/app

RUN npm -g config set user root

RUN mkdir -p /home/node/app/node_modules \
    &&  mkdir -p /home/node/.ssh

RUN echo "$ssh_prv_key" > /home/node/.ssh/id_rsa \
    && echo "$ssh_pub_key" > /home/node/.ssh/id_rsa.pub \
    && echo "Host gitlab.piksel.com StrictHostKeyChecking no" > /home/node/.ssh/config \
    && ssh-keyscan -t rsa gitlab.piksel.com > /home/node/.ssh/known_hosts \
    && chmod 600 /home/node/.ssh/id_rsa \
    && chmod 600 /home/node/.ssh/id_rsa.pub \
    &&  chown -R node:node /home/node/.ssh

USER node

WORKDIR /home/node/app

ENV NPM_CONFIG_PREFIX /home/node/app

EXPOSE 19000 19001 19002
