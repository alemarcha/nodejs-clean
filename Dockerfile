FROM node:10.14

RUN mkdir -p /home/alemarcha-back
WORKDIR /home/alemarcha-back

COPY package.json /home/alemarcha-back
WORKDIR /home/alemarcha-back
RUN npm install --global nodemon