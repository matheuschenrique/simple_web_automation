import os
import time
import sys
import pathlib

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

import csv

TYPES = ["book", "electronics", "clothing", "food", "other"]

CSV_TYPES = ["livro", "eletrônicos", "vestuário", "comida", "outros"]

site = sys.argv[1]
path = os.path.abspath(site)
print(path)
url = pathlib.Path(path).as_uri()
print("Loading "+url)

file = sys.argv[2]

driver = webdriver.Chrome()
driver.get(url)

with open(file, newline='') as file:
    spamreader = csv.reader(file, delimiter=',', quotechar='|')

    next(spamreader, None)
    
    for row in spamreader:

        name = driver.find_element(By.NAME, "name")
        name.send_keys(row[0])

        price = driver.find_element(By.NAME, "price")
        price.send_keys(row[1])

        quantity = driver.find_element(By.NAME, "quantity")
        quantity.send_keys(row[2])

        code = driver.find_element(By.NAME, "code")
        code.send_keys(row[3])

        time.sleep(2)

        next = driver.find_element(By.ID, "nextBtn1")
        next.click()

        description = driver.find_element(By.NAME, "description")
        description.send_keys(row[4])

        get_type_index = CSV_TYPES.index(row[5])

        type = driver.find_element(By.ID, TYPES[get_type_index])
        type.click()

        time.sleep(2)

        next = driver.find_element(By.ID, "nextBtn2")
        next.click()

        time.sleep(2)

        send = driver.find_element(By.ID, "sendBtn")
        send.click()

time.sleep(5)
driver.close()
