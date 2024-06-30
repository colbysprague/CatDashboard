import json
import pprint

# Specify the path to your JSON file
json_file_path = 'kittenData.json'

# Open the JSON file and read its contents
with open(json_file_path, 'r') as file:
    json_data = json.load(file)

for kitten in json_data:
    print(kitten['name'])
