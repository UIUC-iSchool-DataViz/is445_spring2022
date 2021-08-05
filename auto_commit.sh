#!/bin/bash
MESSAGE="Auto-commit: $(date)"
REPO_PATH="/Users/jillnaiman/is445_spring2021"
cd $REPO_PATH
/usr/bin/git add -A
/usr/bin/git commit -m "$MESSAGE"
/usr/bin/git push -u origin master
