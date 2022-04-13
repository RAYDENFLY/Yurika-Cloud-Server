#!/bin/sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
#enter current directory
    cd $DIR 
    cd ..
    npm i node@16
    npm start
