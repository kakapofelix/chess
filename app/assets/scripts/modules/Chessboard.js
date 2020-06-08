// add chess pieces
var config = {
    pieceTheme: 'assets/chessboardjs-1.0.0/img/chesspieces/{piece}.png',
    position: 'start'
};

var board = ChessBoard('board5', config);
var game = new Chess();


var pgn = '1.d4 Nf6 2.c4 g6 3.Nc3 Bg7 4.e4 d6 5.Nf3 0-0 6.O-O e4 7.Re1 Kd7 8.Rxe4 Qg5 9.Nxg5 f6 10.Qg4+ Ne6 11.Qxe6+ Kd8 12.Qe8#  1-0';
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

$('#move1').on('click', function () {
    board.move('e2-e4')
})

$('#move2').on('click', function () {
    board.move('d2-d4', 'g8-f6')
})