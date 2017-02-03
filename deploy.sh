#!/bin/bash
hugo
git add .
git commit -m 'Built for deployment'
git push origin master