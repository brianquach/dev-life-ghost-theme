#!/bin/bash

cd ~
touch .profile

# Install NVM
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
source ~/.profile

cd ~/my-website
npm init -y

# Install WebPack
npm install --save-dev webpack
