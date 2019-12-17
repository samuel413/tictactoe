var c1
var c2
var c3
var c4
var c5
var c6
var c7
var c8
var c9
var cellArray = [c1, c2, c3, c4, c5, c6, c7, c8, c9]
var winVert = [[c1, c4, c7], [c2, c5, c8], [c3, c6, c9]];
var winHoriz = [[c1, c2, c3], [c4, c5, c6], [c7, c8, c9]];
var winDiag = [[c1, c5, c9], [c3, c5, c7]];
var turn = 'X'
var draw

function checkVoctory(triple) {
    if (triple[0] === triple[1] && triple[0] === triple[2] && triple[0] != null) {
        $('h1').text(turn + 'Player Wins');
        $(button).hide;
    }
}

function checkEnd() {
    draw = 0;
    cellArray.forEach(function(cell) {
        if (cell != null) {
            draw = draw + 1;
        }
    })
    if (draw === 9) {
        $('h1').text('DRAW');
    } else {
        winVert.forEach(checkVoctory);
        winHoriz.forEach(checkVoctory);
        winDiag.forEach(checkVoctory);
        if (turn === 'X') {
            turn = 'O';
        } else {
            turn = 'X';
        }
    }
}

function performLogic (button, tile) {
    $(button).hide();
    $(tile).html(turn);
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
    c1 = turn;
    checkEnd();
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
    c2 = turn;
    checkEnd();
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
    c3 = turn;
    checkEnd();
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
    c4 = turn;
    checkEnd();
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
    c5 = turn;
    checkEnd();
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
    c6 = turn;
    checkEnd();
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
    c7 = turn;
    checkEnd();
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
    c8 = turn;
    checkEnd();
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
    c9 = turn;
    checkEnd();
});