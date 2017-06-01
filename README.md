## Installation
- `wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`
- `source ~/.bashrc`
- `nvm install 4.2`
- `cd ~/my-website && npm install`
- Execute ghost install script `~/my-website/ghost_install.sh`

## Run
- Install [Forever](https://www.npmjs.com/package/forever) `npm install -g forever`
- `forever start ~/my-website/ghost/index.js`
