from nba_api.stats.endpoints import shotchartdetail
import json
import requests
import pandas as pd
from CONSTANTS import *



# https://github.com/swar/nba_api/blob/master/docs/nba_api/stats/library/parameters.md#ContextMeasure
shot_json = shotchartdetail.ShotChartDetail(
            team_id = get_team_id(TEAM_NAME),
            player_id = get_player_id(PLAYER_NAME),
            context_measure_simple = 'FGA', # this i think can gives us block made shots B
            season_nullable = SEASON,
            game_id_nullable=GAME_ID,
            season_type_all_star = SEASON_TYPE)

shot_data = json.loads(shot_json.get_json())

relevant_data = shot_data['resultSets'][0]


headers = relevant_data['headers']
rows = relevant_data['rowSet']





made_shots_locations = []
missed_shots_locations = []
for row in rows:
    x_loc = row[headers.index("LOC_X")]
    y_loc = row[headers.index("LOC_Y")]
    if (row[headers.index("EVENT_TYPE")] == "Made Shot"):
        made_shots_locations.append((x_loc, y_loc))
    else:
        missed_shots_locations.append((x_loc, y_loc))
        
with open("./court/data/shotdata.json", 'w') as file:
    data_to_download = {"made_shots": made_shots_locations, "missed_shots": missed_shots_locations, }
    json.dump(data_to_download, file, indent=4)
    
    
# all from https://medium.com/p/e5d70db45d0d

    """
    
    Since all of the rows in our DataFrame correspond to made shots, we can use LOC_X and LOC_Y to plot them. 
    From inspection of the data,  the x-coordinates go from -250 to 250 (every 1/10 of a foot) and 
    the y-coordinates go from 0 to 940 (also every 1/10 of a foot). 
    We can use this information to plot the shot locations on an overlay of an NBA court. But first, let’s create a basketball court!
    
    We add 60 to the y-coordinate since all the coordinates in our dataset are relative to the center of the rim, 
    and we know that the rim sits 6 feet inside the baseline:
    """