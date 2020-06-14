// add chess pieces
var config = {
    pieceTheme: 'assets/chessboardjs-1.0.0/img/chesspieces/{piece}.png',
    position: 'start'
};

var board = ChessBoard('board5', config);
var game = new Chess();

var pgn = '.Nc3 1.d4 Nf6 2.c4 g6 3Bg7 4.e4 d6 5.Nf3 0-0 6.O-O e4 7.Re1 Kd7 8.Rxe4 Qg5 9.Nxg5 f6 10.Qg4+ Ne6 11.Qxe6+ Kd8 12.Qe8#  1-0';
game.load_pgn(pgn);
$('#pgn5').html(pgn);

var history = game.history();
game.reset();
var i = 0;

// If prevous button clicked, go to prevous position
$('#prevBtn').on('click', function () {
    game.undo();
    board.position(game.fen());
    i -= 1;
    if (i < 0) {
        i = 0;
    }
});

// If next button clicked, go to next position
$('#nextBtn').on('click', function () {
    game.move(history[i]);
    board.position(game.fen());
    i += 1;
    if (i > history.length) {
        i = history.length;
    }
});


// If start button clicked, go to start position
$('#startPositionBtn').on('click', function () {
    game.reset();
    board.start();
    i = 0;
});

// If End button clicked, go to end position
$('#endPositionBtn').on('click', function () {
    game.load_pgn(pgn);
    board.position(game.fen());
    i = history.length;
});

// If reset button clicked, go to start position
$('#resetBtn').on('click', function () {
    game.reset();
    board.start();
    i = 0;
});

//moving pieces on button click


var movesArr = ['tre', 'Nf3', 'tr3', 'kfdj']

    for (var i = 0; i < movesArr.length; i++) {
        var moves = document.getElementById('moves')
        var createButtons = moves.appendChild(document.createElement("button"));
        createButtons.appendChild(document.createTextNode(movesArr[i]));
    }

    var buttons = document.getElementsByTagName('button')
    for (var i = 0; i < buttons.length; i++)
    buttons[i].id = 'move' + i;



$('#move5').on('click', function () {
    board.position('rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1')
})

$('#move6').on('click', function () {
    board.position('rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2')
})

$('#move7').on('click', function () {
    board.position('rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2')
})

$('#move8').on('click', function () {
    board.position('rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3')
})

$('#move9').on('click', function () {
    board.position('rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3')
})

$('#move10').on('click', function () {
    board.position('rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4')
})

