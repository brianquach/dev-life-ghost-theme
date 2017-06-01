#!/bin/bash

cd ~/my-website
wget https://ghost.org/zip/ghost-latest.zip
sudo unzip -uo ghost-latest.zip -d ~/my-website/ghost
rm -rf ghost-latest.zip

cd ~/my-website/ghost && sudo npm install --production

cp config.example.js config.js

# Replace 127.0.0.1 with 0.0.0.0 to give ghost access to host machine
sed -i "s/127.0.0.1/0.0.0.0/g" config.js
