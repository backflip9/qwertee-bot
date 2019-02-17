#!/bin/bash
#this creates a directory named after today's date and calls bs4-qwertee.py to populate the directory with today's shirts
#datestring=`date +%F-%H%M`
datestring=`date +%F`
#echo $datestring
mkdir $datestring
cd $datestring
python3 /home/liam/.bin/bs4-qwertee.py
echo "done: $datestring"
