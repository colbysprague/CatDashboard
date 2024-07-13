import pprint
import numpy as np
import subprocess
import datetime
import json
import pprint

def calc_gain(weights):
    if len(weights) >= 2:
        return weights[-1] - weights[-2]

def calc_weight_champs(kittenData):
    combined_array = [kitten['weight'] for kitten in kittenData if kitten['isKitten'] == True]
    indicies_of_max = np.argmax(combined_array, axis=0)

    result = [[kitten['name'] for kitten in kittenData][i] for i in indicies_of_max]

    weightChampions = {}
    for kitten in kittenData:
        if kitten['isKitten']: weightChampions[kitten['name']] = 0
    for kitten in result:
        weightChampions[kitten] = weightChampions[kitten] + 1

    for kitten in kittenData:
        if kitten['isKitten']:
            kitten.setdefault('timesWeightChamp', weightChampions[kitten['name']])
        else:
            kitten.setdefault('timesWeightChamp', 0)

    print(weightChampions)

    return kittenData



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


def main():
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

        print("Determining weight champions...")
        json_data = calc_weight_champs(json_data)

        with open(json_file_path, 'w') as file:
            json.dump(json_data, file, indent=2)

        # stash backup file
        with open(backup_file_path, 'w') as file:
            json.dump(json_data, file, indent=2)

        run_bash_script('commit.sh')
        print("Changes saved!")
    else:
        print("Changes not saved")


if __name__ == "__main__":
    main()
