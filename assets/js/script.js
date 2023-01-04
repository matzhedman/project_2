// Function to mark tiles with X or O
/** 
 * Checks the tiles if they're marked with X or O
 * After they have been marked, they will get disabled (not clickable)
 * It is set to start the game with Player X begins and then switch to Player O
 */

let playerTurn = 1;

function mark_1() {

    if (playerTurn == 1) {
        document.getElementById("tile1").value = "x";
        document.getElementById("tile1").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile1").value = "o";
        document.getElementById("tile1").disabled = true;
        playerTurn = 1;
    }
}

function mark_2() {
    if (playerTurn == 1) {
        document.getElementById("tile2").value = "x";
        document.getElementById("tile2").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile2").value = "o";
        document.getElementById("tile2").disabled = true;
        playerTurn = 1;
    }
}

function mark_3() {
    if (playerTurn == 1) {
        document.getElementById("tile3").value = "x";
        document.getElementById("tile3").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile3").value = "o";
        document.getElementById("tile3").disabled = true;
        playerTurn = 1;
    }
}

function mark_4() {
    if (playerTurn == 1) {
        document.getElementById("tile4").value = "x";
        document.getElementById("tile4").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile4").value = "o";
        document.getElementById("tile4").disabled = true;
        playerTurn = 1;
    }
}

function mark_5() {
    if (playerTurn == 1) {
        document.getElementById("tile5").value = "x";
        document.getElementById("tile5").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile5").value = "o";
        document.getElementById("tile5").disabled = true;
        playerTurn = 1;
    }
}

function mark_6() {
    if (playerTurn == 1) {
        document.getElementById("tile6").value = "x";
        document.getElementById("tile6").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile6").value = "o";
        document.getElementById("tile6").disabled = true;
        playerTurn = 1;
    }
}

function mark_7() {
    if (playerTurn == 1) {
        document.getElementById("tile7").value = "x";
        document.getElementById("tile7").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile7").value = "o";
        document.getElementById("tile7").disabled = true;
        playerTurn = 1;
    }
}

function mark_8() {
    if (playerTurn == 1) {
        document.getElementById("tile8").value = "x";
        document.getElementById("tile8").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile8").value = "o";
        document.getElementById("tile8").disabled = true;
        playerTurn = 1;
    }
}

function mark_9() {
    if (playerTurn == 1) {
        document.getElementById("tile9").value = "x";
        document.getElementById("tile9").disabled = true;
        playerTurn = 0;
    } else {
        document.getElementById("tile9").value = "o";
        document.getElementById("tile9").disabled = true;
        playerTurn = 1;
    }
}

// scoreboard
const scoreBoard = document.getElementsByClassName("scoreboard");

let plx_score = 0;
let plo_score = 0;
let tie_score = 0;


function x_win() {
    plx_score++;
    player_x.innerHTML = plx_score;
}

function o_win() {
    plo_score++;
    player_o.innerHTML = plo_score;
}

function tie_win() {
    tie_score++;
    tie.innerHTML = tie_score;
}

// reset button 
function resetTiles() {
    const tiles = document.querySelectorAll('.gametile');
    tiles.forEach(tile => {
        tile.disabled = false;
        tile.value = '';
    })
    playerTurn = 1;
    document.getElementById('print').innerHTML = "";
}

function resetGame() {
    resetTiles();
    plx_score = 0;
    plo_score = 0;
    tie_score = 0;
    player_x.innerHTML = plx_score;
    player_o.innerHTML = plo_score;
    tie.innerHTML = tie_score;
}