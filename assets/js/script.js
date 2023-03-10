// Function to mark tiles with X or O
/** 
 * Checks the tiles if they're marked with X or O
 * After they have been marked, they will get disabled (not clickable)
 * It is set to start the game with Player X begins and then switch to Player O
 */

/* credit to @asmitsirohi to this function */
let playerTurn = 1;

function mark1() {

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

function mark2() {
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

function mark3() {
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

function mark4() {
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

function mark5() {
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

function mark6() {
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

function mark7() {
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

function mark8() {
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

function mark9() {
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


// whose turn is it
function displayPlayerTurn() {
	if (playerTurn == 1) {
		document.getElementById('print').innerHTML = "X is playing";
	} else {
		document.getElementById('print').innerHTML = "O is playing";
	}
}


// scoreboard
let plxScore = 0;
let ploScore = 0;
let tieScore = 0;


function xWin() {
	plxScore++;
	document.getElementById('playerX').innerHTML = plxScore;
}

function oWin() {
	ploScore++;
	document.getElementById('playerO').innerHTML = ploScore;
}

function tieWin() {
	tieScore++;
	document.getElementById('tie').innerHTML = tieScore;
}


// reset button 
function resetTiles() {
	const tiles = document.querySelectorAll('.gametile');
	tiles.forEach(tile => {
		tile.disabled = false;
		tile.value = '';
	});
	playerTurn = 1;
	document.getElementById('print').innerHTML = "Player X starts the game";
}

function resetGame() {
	resetTiles();
	plxScore = 0;
	ploScore = 0;
	tieScore = 0;
	document.getElementById('playerX').innerHTML = plxScore;
	document.getElementById('playerO').innerHTML = ploScore;
	document.getElementById('tie').innerHTML = tieScore;
}

/* credit to @asmitsirohi for function "statusTile"*/
// status on tiles 
function statusTile() {
	var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9;
	tile1 = document.getElementById("tile1").value;
	tile2 = document.getElementById("tile2").value;
	tile3 = document.getElementById("tile3").value;
	tile4 = document.getElementById("tile4").value;
	tile5 = document.getElementById("tile5").value;
	tile6 = document.getElementById("tile6").value;
	tile7 = document.getElementById("tile7").value;
	tile8 = document.getElementById("tile8").value;
	tile9 = document.getElementById("tile9").value;

	// win conditions
	// win conditions for Player X
	if (
		(tile1 == "x" && tile2 == "x" && tile3 == "x") ||
		(tile4 == "x" && tile5 == "x" && tile6 == "x") ||
		(tile7 == "x" && tile8 == "x" && tile9 == "x") ||

		(tile1 == "x" && tile4 == "x" && tile7 == "x") ||
		(tile2 == "x" && tile5 == "x" && tile8 == "x") ||
		(tile3 == "x" && tile6 == "x" && tile9 == "x") ||

		(tile1 == "x" && tile5 == "x" && tile9 == "x") ||
		(tile3 == "x" && tile5 == "x" && tile7 == "x")

	) {
		const tiles = document.querySelectorAll('.gametile');
		tiles.forEach(tile => {
			tile.disabled = true;
		});
		document.getElementById('print').innerHTML = "Player X won";
		xWin();


		// win conditions for Player O
	} else if (
		(tile1 == "o" && tile2 == "o" && tile3 == "o") ||
		(tile4 == "o" && tile5 == "o" && tile6 == "o") ||
		(tile7 == "o" && tile8 == "o" && tile9 == "o") ||

		(tile1 == "o" && tile4 == "o" && tile7 == "o") ||
		(tile2 == "o" && tile5 == "o" && tile8 == "o") ||
		(tile3 == "o" && tile6 == "o" && tile9 == "o") ||

		(tile1 == "o" && tile5 == "o" && tile9 == "o") ||
		(tile3 == "o" && tile5 == "o" && tile7 == "o")
	) {
		const tiles = document.querySelectorAll('.gametile');
		tiles.forEach(tile => {
			tile.disabled = true;
		});
		document.getElementById('print').innerHTML = "Player O won";
		oWin();

		// conditions for a Tie
	} else if ((tile1 == "o" || tile1 == "x") && (tile2 == "o" || tile2 == "x") && (tile3 == "o" || tile3 == "x") &&
		(tile4 == "o" || tile4 == "x") && (tile5 == "o" || tile5 == "x") && (tile6 == "o" || tile6 == "x") &&
		(tile7 == "o" || tile7 == "x") && (tile8 == "o" || tile8 == "x") && (tile9 == "o" || tile9 == "x"))

	{
		const tiles = document.querySelectorAll('.gametile');
		tiles.forEach(tile => {
			tile.disabled = true;
		});
		document.getElementById('print').innerHTML = "It's a Tie!";
		tieWin();

	} else {
		displayPlayerTurn();
	}
}

/* credit to W3School for modal */
// modal
var modal = document.getElementById("modalInstructions");

// opens the modal by clicking on the "Instructions"-button
var btn = document.getElementById("btnModal");

btn.onclick = function () {
	modal.style.display = "block";
};

// closes the modal by clicking on the "X"
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
};

// closes the modal by clicking anywhere outside the modal
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};