# Simple Web Automation with Selenium
Automated form filling using Selenium for a multi-step form on a simple website.

## Installation
Make sure you have Python installed, and then run the following command to install Selenium:

```bash
pip install selenium
```

## Simple website
The `site` folder contains a simple website implementation with a multi-step form and default fields that must be filled to proceed to the next steps.

## CSV generation
Based on the necessary fields of the website, `geracsv.py` generates a CSV file with the some data do fill the form

To generate the CSV, execute the following command:

```bash
python geracsv.py
```

## Usage
The automation script (`formAutomation.py`) requires two arguments:
1. The path to the HTML file of the website (`./site/index.html` in this case).
2. The CSV file containing data for form filling (`produtos.csv` in this case).

To run the automation, use the following command:

```bash
python formAutomation.py ./site/index.html produtos.csv
```

The script will consume the csv file and fill the form automatically until the last product.