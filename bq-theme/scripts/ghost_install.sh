#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

rm -rf ~/bq-theme/ghost # remove existing ghost directory

cd ~
wget https://ghost.org/zip/ghost-latest.zip
sudo unzip -uo ghost-latest.zip -d ~/bq-theme/ghost
rm -rf ghost-latest.zip # clean up

cd ~/bq-theme/ghost && sudo npm install --production

cp config.example.js config.js

# Replace 127.0.0.1 with 0.0.0.0 to give ghost access to host machine
sed -i "s/127.0.0.1/0.0.0.0/g" config.js

# install forever and run ghost
npm install -g forever
forever start index.js
