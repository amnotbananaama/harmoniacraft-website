#!/bin/bash
if [ "$1" = "production"]; then
  NODE_ENV=production node index.js
else
  NODE_ENV=dev node index.js
fi
