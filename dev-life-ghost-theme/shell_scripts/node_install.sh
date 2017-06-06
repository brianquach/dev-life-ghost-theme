#!/bin/bash

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

nvm install 4.2
nvm alias default 4.2
nvm use default

npm install -g npm # update npm to latest version
