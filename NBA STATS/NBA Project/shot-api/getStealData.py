from nba_api.stats.endpoints import shotchartdetail
import json
import requests
import pandas as pd
from CONSTANTS import *



# https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#ContextMeasure
steal_json = shotchartdetail.ShotChartDetail(
            team_id = get_team_id(TEAM_NAME),
            player_id = get_player_id(PLAYER_NAME),
            context_measure_simple = 'STL', # this i think can gives us block made shots B
            season_nullable = SEASON,
            game_id_nullable=GAME_ID,
            season_type_all_star = SEASON_TYPE)

steal_data = json.loads(steal_json.get_json())

relevant_data = steal_data['resultSets'][0]


headers = relevant_data['headers']
rows = relevant_data['rowSet']





steal_locations = []
for row in rows:
    x_loc = row[headers.index("LOC_X")]
    y_loc = row[headers.index("LOC_Y")]
    steal_locations.append((x_loc, y_loc))
        
with open("./court/data/stealdata.json", 'w') as file:
    data_to_download = {"steals": steal_locations}
    json.dump(data_to_download, file, indent=4)
    
#https://towardsdatascience.com/make-a-simple-nba-shot-chart-with-python-e5d70db45d0d
