import datetime
import json
import pprint

def calc_gain(weights):
    if len(weights) >= 2:
        return weights[-1] - weights[-2]


# Specify the path to your JSON file
json_file_path = 'kittenData.json'
backup_file_path = 'backupKittenData.json'

# Open the JSON file and read its contents
with open(json_file_path, 'r') as file:
    json_data = json.load(file)

# stash backup file
with open(backup_file_path, 'w') as file:
    json.dump(json_data, file, indent=2)

# process new data
print(f"Enter new weights for: ")
for kitten in json_data:
    if kitten.get("isKitten", False):
        new_weight = int(input(f"   {kitten['name']}: "))
        kitten.setdefault('weight', []).append(new_weight)
        kitten['gain'] = calc_gain(kitten['weight'])
        print(f"        + {kitten['gain']}")

with open(json_file_path, 'w') as file:
    json.dump(json_data, file, indent=2)

print("Saving weight updates...")
