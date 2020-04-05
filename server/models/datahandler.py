import csv

def load_data(name):
    with open(name+'.csv', newline='') as csv_file:
        data = list(csv.reader(csv_file))
        return data
