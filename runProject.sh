#!/bin/bash
(cd ./server/; node app.js) &
(cd ./client-server/; node app.js) && fg