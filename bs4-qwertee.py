#!/usr/bin/python3
#this uses bs4 to scrape qwertee.com's homepage for the daily shirts' source images, then saves them to files named after the 'id' attributes of the div tags that the images reside in
from PIL import Image
from bs4 import BeautifulSoup
import requests

content=requests.get('https://www.qwertee.com').text
soup=BeautifulSoup(content,features="html.parser")
imageList=soup.find_all("div",{"class","big-slides"})[0].find_all("div",{"class","big-slide"})
for oneImage in imageList:
    img=Image.open(requests.get(oneImage.find("img")['src'],stream=True).raw)
    img.save('./' + oneImage['id'] + '.jpg')
