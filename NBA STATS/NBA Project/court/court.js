const LEFT_BUFFER = 0//3.00022
const TOP_BUFFER =  0//5.3574936
var court_container = document.getElementById("court-container");


function plotMadeShot(x, y) {
    var made_shot = document.createElement("img");
    made_shot.className = "marker madeshot";
    made_shot.style.left = `${x + LEFT_BUFFER}%`;
    made_shot.style.top = `${y + TOP_BUFFER}%`;

    court_container.appendChild(made_shot);
}
function plotMadeShots(made_shots) {
    for (var i = 0; i < made_shots.length; i++) {
        var made_shot = made_shots[i];
        var shot_y = ((made_shot[0] + 250) / 500) * 100;
        var shot_x = (((made_shot[1] + 60) / 940)) * 100;
        plotMadeShot(shot_x, shot_y);  
    }
}



function plotMissedShot(x, y) {
    var missed_shot = document.createElement("img");
    missed_shot.className = "marker missedshot";
    missed_shot.style.left = `${x + LEFT_BUFFER}%`;
    missed_shot.style.top = `${y + TOP_BUFFER}%`;

    court_container.appendChild(missed_shot);
}
function plotMissedShots(missed_shots) {
    for (var i = 0; i < missed_shots.length; i++) {
        var missed_shot = missed_shots[i];
        var shot_y = ((missed_shot[0] + 250) / 500) * 100;
        var shot_x = (((missed_shot[1] + 60) / 940)) * 100;
        plotMissedShot(shot_x, shot_y);  
    }
}


function plotBlock(x, y) {
    var block = document.createElement("img");
    block.className = "marker block";
    block.style.left = `${x + LEFT_BUFFER}%`;
    block.style.top = `${y + TOP_BUFFER}%`;

    court_container.appendChild(block);
}
function plotBlocks(blocks) {
    for (var i = 0; i < blocks.length; i++) {
        var block = blocks[i];
        var block_y = ((block[0] + 250) / 500) * 100;
        var block_x = (100 - ((((block[1] + 60) / 940)) * 100));
        plotBlock(block_x, block_y);  
    }
}


function plotSteal(x, y) {
    var steal = document.createElement("img");
    steal.className = "marker steal";
    steal.style.left = `${x + LEFT_BUFFER}%`;
    steal.style.top = `${y + TOP_BUFFER}%`;

    court_container.appendChild(steal);
}
function plotSteals(steals) {
    for (var i = 0; i < steals.length; i++) {
        var steal = steals[i];
        var steal_y = ((steal[0] + 250) / 500) * 100;
        var steal_x = (100 - ((((steal[1] + 60) / 940)) * 100));
        plotSteal(steal_x, steal_y);  
    }
}



function plotORebound(x, y) {
    var orebound = document.createElement("img");
    orebound.className = "marker orebound";
    orebound.style.left = `${x + LEFT_BUFFER}%`;
    orebound.style.top = `${y + TOP_BUFFER}%`;

    court_container.appendChild(orebound);
}

function plotORebounds(orebounds) {
    for (var i = 0; i < orebounds.length; i++) {
        var orebound = orebounds[i];
        var orebound_y = ((orebound[0] + 250) / 500) * 100;
        var orebound_x = (((((orebound[1] + 60) / 940)) * 100));
        plotORebound(orebound_x, orebound_y);  
    }
}

function plotDRebound(x, y) {
    var drebound = document.createElement("img");
    drebound.className = "marker drebound";
    drebound.style.left = `${x + LEFT_BUFFER}%`;
    drebound.style.top = `${y + TOP_BUFFER}%`;

    court_container.appendChild(drebound);
}

function plotDRebounds(drebounds) {
    for (var i = 0; i < drebounds.length; i++) {
        var drebound = drebounds[i];
        var drebound_y = ((drebound[0] + 250) / 500) * 100;
        var drebound_x = (100 - ((((drebound[1] + 60) / 940)) * 100));
        plotDRebound(drebound_x, drebound_y);  
    }
}




function plotTurnover(x, y) {
    var turnover = document.createElement("img");
    turnover.className = "marker turnover";
    turnover.style.left = `${x + LEFT_BUFFER}%`;
    turnover.style.top = `${y + TOP_BUFFER}%`;

    court_container.appendChild(turnover);
}


function plotTurnovers(turnovers) {
    for (var i = 0; i < turnovers.length; i++) {
        var turnover = turnovers[i];
        var turnover_y = ((turnover[0] + 250) / 500) * 100;
        var turnover_x = (((((turnover[1] + 60) / 940)) * 100));
        plotTurnover(turnover_x, turnover_y);  
    }
}


function plotAssist(x, y) {
    var assist = document.createElement("img");
    assist.className = "marker turnover";
    assist.style.left = `${x + LEFT_BUFFER}%`;
    assist.style.top = `${y + TOP_BUFFER}%`;

    court_container.appendChild(turnover);
}


function plotAssist(assists) {
    for (var i = 0; i < assists.length; i++) {
        var assist = assists[i];
        var assist_y = ((assist[0] + 250) / 500) * 100;
        var assist_x = (((((assist[1] + 60) / 940)) * 100));
        plotTurnover(assist_x, assist_y);  
    }
}



export default { plotMadeShot, plotMissedShot, plotMadeShots, plotMissedShots, plotBlock, plotBlocks, plotSteal, plotSteals, plotORebound, plotORebounds, plotDRebound, plotDRebounds, plotTurnovers  };
