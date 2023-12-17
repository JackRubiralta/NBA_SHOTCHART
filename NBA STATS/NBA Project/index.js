import court from './court/court.js';
import shot_data from './court/data/shotdata.json' assert { type: 'json' };
import block_data from './court/data/blockdata.json' assert { type: 'json' };
import steal_data from './court/data/stealdata.json' assert { type: 'json' };
import turnover_data from './court/data/turnoverdata.json' assert { type: 'json' };

function downloadData() {
    
}

function main() {

    var missed_shots = shot_data["missed_shots"]
    var made_shots = shot_data["made_shots"]
    var blocks = block_data["blocks"]
    var steals = steal_data["steals"]
    var turnovers = turnover_data["turnovers"]

    

    
    //court.plotSteals(steals)
    court.plotMissedShots(missed_shots)
    court.plotMadeShots(made_shots)
    //court.plotBlocks(blocks)
    //court.plotSteals(steals)
    //court.plotTurnovers(turnovers)

}

main();

