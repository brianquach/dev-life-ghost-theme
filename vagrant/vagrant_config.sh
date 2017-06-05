#!/bin/bash

apt-get -qqy update
apt-get -qqy install build-essential libssl-dev
apt-get -qqy install unzip

su -c "source /home/vagrant/bq-theme/scripts/node_install.sh" vagrant
su -c "source /home/vagrant/bq-theme/scripts/ghost_install.sh" vagrant
