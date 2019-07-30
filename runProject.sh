#!/bin/bash
(cd ./backend-server/; node app.js) &
(cd ./client-server/; node app.js) && fg