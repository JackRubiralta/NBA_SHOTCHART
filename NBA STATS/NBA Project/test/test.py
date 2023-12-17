import requests
import json

 
# Opening JSON file
f = open('./test/testdata.json')

play_by_play = json.load(f)


with open("./court/data/test.json", 'w') as file:
    data_to_download = play_by_play
    json.dump(data_to_download, file, indent=4)