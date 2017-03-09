#!/bin/bash

export DEBIAN_FRONTEND=noninteractive

echo "Provisioning virtual machine..."

echo "Installing Git"
    apt-get install git -y > /dev/null

echo "Installing Nginx"
    apt-get install nginx -y > /dev/null

echo "Updating PHP repository"
    apt-get install python-software-properties build-essential -y > /dev/null
    add-apt-repository ppa:ondrej/php -y > /dev/null
    apt-get update > /dev/null
    apt-get install -y php7.0 > /dev/null

echo "Installing PHP extensions"
    apt-get install php7.0-fpm php7.0-mysql php7.0-curl php7.0-json php7.0-cgi -y > /dev/null

echo "Installing Sendmail"
    apt-get install -y sendmail > /dev/null

echo "Installing MySQL"
    apt-get install debconf-utils -y > /dev/null
    debconf-set-selections <<< "mysql-server mysql-server/root_password password 1234"
    debconf-set-selections <<< "mysql-server mysql-server/root_password_again password 1234"

    apt-get install mysql-server -y > /dev/null

echo "Configuring Nginx"
    cp /var/www/html/provision/config/nginx_vhost /etc/nginx/sites-available/nginx_vhost > /dev/null

    ln -s /etc/nginx/sites-available/nginx_vhost /etc/nginx/sites-enabled/

    service nginx restart > /dev/null
