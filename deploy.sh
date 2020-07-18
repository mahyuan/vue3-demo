#!/bin/bash

set -e

yarn build

scp -r ./dist/*  hw:/home/mahy/www/test/doc/
