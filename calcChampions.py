import pprint
import numpy as np
import json
from dailyWeights import calc_weight_champs

# Specify the path to your JSON file
json_file_path = 'kittenData.json'
backup_file_path = 'backupKittenData.json'

# Open the JSON file and read its contents
with open(json_file_path, 'r') as file:
    json_data = json.load(file)
    backup_data = json_data

# combined_array = np.array(
#     [kitten['weight'] for kitten in json_data if kitten['isKitten'] == True]
# )

# indices_of_max = np.argmax(combined_array, axis=0)

# kittens = [kitten['name'] for kitten in json_data if kitten['isKitten']]
# result = [kittens[i] for i in indices_of_max]

# weightChampions = {}

# for kitten in json_data:
#     if kitten['isKitten']: weightChampions[kitten['name']] = 0

# for index, kitten in enumerate(result):

#     weightChampions[kitten] = weightChampions[kitten] + 1

# for kitten in json_data:
#     if kitten['isKitten']:
#         kitten.setdefault('timesWeightChamp', weightChampions[kitten['name']])
#     else:
#         kitten.setdefault('timesWeightChamp', 0)

# pprint.pprint(json_data)


calc_weight_champs(json_data)
