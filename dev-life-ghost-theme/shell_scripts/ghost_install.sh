#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

rm -rf ~/bq-theme/ghost # remove existing ghost directory

cd ~
wget https://github.com/TryGhost/Ghost/releases/download/0.11.9/Ghost-0.11.9.zip
unzip -uo Ghost-0.11.9.zip -d ~/bq-theme/ghost
rm -rf Ghost-0.11.9.zip.zip # clean up

cd ~/bq-theme/ghost && sudo npm install --production

cp config.example.js config.js

# Replace 127.0.0.1 with 0.0.0.0 to give ghost access to host machine
sed -i "s/127.0.0.1/0.0.0.0/g" config.js

# install forever and run ghost
npm install -g forever
forever start index.js
