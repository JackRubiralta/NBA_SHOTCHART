import json
import requests
from nba_api.stats.static import players

SEASON =  '2005-06',
SEASON_TYPE = 'Regular Season'
TEAM_NAME = 'Los Angeles Lakers'
PLAYER_NAME = 'Kobe Bryant'
GAME_ID = "0020500591"
def get_player_id(player_name):
    return players.find_players_by_full_name(player_name)[0]['id']

def get_team_id(team_name):   
    return 0#teams.find_teams_by_full_name(team_name)

