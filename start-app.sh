#!/bin/sh

SRC_CONF=/usr/share/nginx/html/config/config.prod.js
DST_CONF=/usr/share/nginx/html/config/config.js

cp -f $SRC_CONF $DST_CONF

sed -i "s#%API_URL%#${API_URL}#g" $DST_CONF
sed -i "s#%APP_VERSION%#${APP_VERSION}#g" $DST_CONF

echo "Start app with API_URL=${API_URL} and APP_VERSION=${APP_VERSION}"

nginx -g "daemon off;"
