#!/bin/bash
cd ~/CI/S1/
grunt fpublish
cd ~/CI/ghost/content/themes/ci/
rm *.html
cd ~/CI/S1/