#!/bin/bash

# start node server
pm2 start .

# start binaryjs server
pm2 start ./my_binaryjs/binaryjsServer.js --no-daemon
