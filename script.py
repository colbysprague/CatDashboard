import subprocess
import datetime
import json
import pprint

def calc_gain(weights):
    if len(weights) >= 2:
        return weights[-1] - weights[-2]

def get_valid_weight(prompt):
    while True:
        try:
            value = int(input(prompt))
            return value  # Return the value if it's a valid integer
        except ValueError:
            print("*!* Error: Please enter a valid integer.")

def get_valid_yes_no(prompt):
    while True:
        response = input(prompt).strip().lower()  # Get user input, remove extra spaces, and convert to lowercase
        if response == 'y' or response == 'n':
            return response  # Return valid response
        else:
            print("Error: Please enter 'y' or 'n'.")

def run_bash_script(script_path):
    try:
        subprocess.run(['bash', script_path], check=True)
        print("Bash script executed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error executing bash script: {e}")


# Specify the path to your JSON file
json_file_path = 'kittenData.json'
backup_file_path = 'backupKittenData.json'

# Open the JSON file and read its contents
with open(json_file_path, 'r') as file:
    json_data = json.load(file)
    backup_data = json_data

# process new data
print(f"Enter new weights for: ")
for kitten in json_data:
    if kitten.get("isKitten", False):
        new_weight = get_valid_weight(f"    {kitten['name']}: ")
        kitten.setdefault('weight', []).append(new_weight)
        kitten['gain'] = calc_gain(kitten['weight'])
        print(f"        + {kitten['gain']}")


print("Data Changed: ")
for kitten in json_data:
    if kitten['isKitten']:
        print(f"    {kitten['name']}: {kitten['weight'][-1]}  +({kitten['gain']})")

answer = get_valid_yes_no(f"Would you like to save your changes? (Y/N): ")
if answer == 'y':
    print("Saving weight updates...")
    with open(json_file_path, 'w') as file:
        json.dump(json_data, file, indent=2)

    # stash backup file
    with open(backup_file_path, 'w') as file:
        json.dump(json_data, file, indent=2)

    run_bash_script('commit.sh')
    print("Changes saved!")
else:
   print("Changes not saved")
