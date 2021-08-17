// // план
// // 1) Класс фигура с методами и свойствами 
// // 2  дочерние классы со своими методами и свойствами  
// // 3) класс самой игры
// // 4) класс игроков(белый и черный)
// // 5) класс поля 


class Board {
    constructor() {
       this.squares = initialiseChessBoard()
    }
 
    getBoardState() {
       console.log(this.squares)
    }
 
    makeMove(start, end) {
       this.checkMove(start)
       this.checkMove(end)
       this.getBoardState()
    }
 }
 
 class Game extends Board {
    constructor() {
       super()
       this.state = {
          whiteFallenSoldiers: [],
          blackFallenSoldiers: [],
          player: 1,
          sourceSelection: -1,
          turn: 'white'
       }
    }
 
    checkMove(i) {
       const squares = this.squares.slice();
 
       if (this.state.sourceSelection === -1) {
          if (!squares[i] || squares[i].player !== this.state.player) {
             console.log("Wrong selection. Choose player " + this.state.player + " pieces.")
          }
          else {
             console.log("Choose destination for the selected piece")
             this.state.sourceSelection = i
          }
       }
 
       else if (this.state.sourceSelection > -1) {
          if (squares[i] && squares[i].player === this.state.player) {
             console.log("Wrong selection. Choose valid source and destination again.")
             this.state.sourceSelection = -1
          }
          else {
 
             const squares = this.squares.slice();
             const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
             const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
             const isDestEnemyOccupied = squares[i] ? true : false;
             const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
             const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
             const isMoveLegal = this.isMoveLegal(srcToDestPath);
 
             if (isMovePossible && isMoveLegal) {
                if (squares[i] !== null) {
                   if (squares[i].player === 1) {
                      whiteFallenSoldiers.push(squares[i]);
                   }
                   else {
                      blackFallenSoldiers.push(squares[i]);
                   }
                }
                console.log("Moved!!!")
                squares[i] = squares[this.state.sourceSelection];
                squares[this.state.sourceSelection] = null;
                let player = this.state.player === 1 ? 2 : 1;
                let turn = this.state.turn === 'white' ? 'black' : 'white';
                this.state = {
                   sourceSelection: -1,
                   whiteFallenSoldiers: whiteFallenSoldiers,
                   blackFallenSoldiers: blackFallenSoldiers,
                   player: player,
                   turn: turn
                }
                this.squares = squares
             }
             else {
                console.log("Wrong selection. Choose valid source and destination again.")
                this.state.sourceSelection = -1
             }
          }
       }
    }
 
    isMoveLegal(srcToDestPath) {
       let isLegal = true;
       for (let i = 0; i < srcToDestPath.length; i++) {
          if (this.squares[srcToDestPath[i]] !== null) {
             isLegal = false;
          }
       }
       return isLegal;
    }
 }
 
 class Piece {
    constructor(player) {
       this.player = player;
    }
 }
 
 class King extends Piece {
    constructor(player) {
       super(player);
    }
 
    isMovePossible(src, dest) {
       return (src - 9 === dest ||
          src - 8 === dest ||
          src - 7 === dest ||
          src + 1 === dest ||
          src + 9 === dest ||
          src + 8 === dest ||
          src + 7 === dest ||
          src - 1 === dest);
    }
 
    getSrcToDestPath(src, dest) {
       return [];
    }
 }
 
 class Queen extends Piece {
    constructor(player) {
       super(player);
    }
 
    isMovePossible(src, dest) {
       let mod = src % 8;
       let diff = 8 - mod;
 
       return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0) ||
          (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
    }
 
    getSrcToDestPath(src, dest) {
       let path = [], pathStart, pathEnd, incrementBy;
       if (src > dest) {
          pathStart = dest;
          pathEnd = src;
       }
       else {
          pathStart = src;
          pathEnd = dest;
       }
       if (Math.abs(src - dest) % 8 === 0) {
          incrementBy = 8;
          pathStart += 8;
       }
       else if (Math.abs(src - dest) % 9 === 0) {
          incrementBy = 9;
          pathStart += 9;
       }
       else if (Math.abs(src - dest) % 7 === 0) {
          incrementBy = 7;
          pathStart += 7;
       }
       else {
          incrementBy = 1;
          pathStart += 1;
       }
 
       for (let i = pathStart; i < pathEnd; i += incrementBy) {
          path.push(i);
       }
       return path;
    }
 }
 
 class Bishop extends Piece {
    constructor(player) {
       super(player);
    }
 
    isMovePossible(src, dest) {
       return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
    }
 
    getSrcToDestPath(src, dest) {
       let path = [], pathStart, pathEnd, incrementBy;
       if (src > dest) {
          pathStart = dest;
          pathEnd = src;
       }
       else {
          pathStart = src;
          pathEnd = dest;
       }
       if (Math.abs(src - dest) % 9 === 0) {
          incrementBy = 9;
          pathStart += 9;
       }
       else {
          incrementBy = 7;
          pathStart += 7;
       }
 
       for (let i = pathStart; i < pathEnd; i += incrementBy) {
          path.push(i);
       }
       return path;
    }
 }
 
 class Knight extends Piece {
    constructor(player) {
       super(player);
    }
 
    isMovePossible(src, dest) {
       return (src - 17 === dest ||
          src - 10 === dest ||
          src + 6 === dest ||
          src + 15 === dest ||
          src - 15 === dest ||
          src - 6 === dest ||
          src + 10 === dest ||
          src + 17 === dest);
    }
 
    getSrcToDestPath() {
       return [];
    }
 }
 
 class Rook extends Piece {
    constructor(player) {
       super(player);
    }
 
    isMovePossible(src, dest) {
       let mod = src % 8;
       let diff = 8 - mod;
       return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
    }
 
    getSrcToDestPath(src, dest) {
       let path = [], pathStart, pathEnd, incrementBy;
       if (src > dest) {
          pathStart = dest;
          pathEnd = src;
       }
       else {
          pathStart = src;
          pathEnd = dest;
       }
       if (Math.abs(src - dest) % 8 === 0) {
          incrementBy = 8;
          pathStart += 8;
       }
       else {
          incrementBy = 1;
          pathStart += 1;
       }
 
       for (let i = pathStart; i < pathEnd; i += incrementBy) {
          path.push(i);
       }
       return path;
    }
 }
 
 class Pawn extends Piece {
    constructor(player) {
       super(player);
       this.initialPositions = {
          1: [48, 49, 50, 51, 52, 53, 54, 55],
          2: [8, 9, 10, 11, 12, 13, 14, 15]
       }
    }
 
    isMovePossible(src, dest, isDestEnemyOccupied) {
 
       if (this.player === 1) {
          if ((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.initialPositions[1].indexOf(src) !== -1)) {
             return true;
          }
          else if (isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)) {
             return true;
          }
       }
       else if (this.player === 2) {
          if ((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.initialPositions[2].indexOf(src) !== -1)) {
             return true;
          }
          else if (isDestEnemyOccupied && (dest === src + 9 || dest === src + 7)) {
             return true;
          }
       }
       return false;
    }
 
    getSrcToDestPath(src, dest) {
       if (dest === src - 16) {
          return [src - 8];
       }
       else if (dest === src + 16) {
          return [src + 8];
       }
       return [];
    }
 }
 
 function initialiseChessBoard() {
    const squares = Array(64).fill(null);
 
    for (let i = 8; i < 16; i++) {
       squares[i] = new Pawn(2);
       squares[i + 40] = new Pawn(1);
    }
    squares[0] = new Rook(2);
    squares[7] = new Rook(2);
    squares[56] = new Rook(1);
    squares[63] = new Rook(1);
 
    squares[1] = new Knight(2);
    squares[6] = new Knight(2);
    squares[57] = new Knight(1);
    squares[62] = new Knight(1);
 
    squares[2] = new Bishop(2);
    squares[5] = new Bishop(2);
    squares[58] = new Bishop(1);
    squares[61] = new Bishop(1);
 
    squares[3] = new Queen(2);
    squares[4] = new King(2);
 
    squares[59] = new Queen(1);
    squares[60] = new King(1);
 
    return squares;
 }
 
 const newGame = new Game()
 newGame.makeMove(52, 36)
 newGame.makeMove(12, 28)
 newGame.makeMove(61, 34)
 newGame.makeMove(8, 16)
 newGame.makeMove(59, 45)
 newGame.makeMove(16, 24)
 newGame.makeMove(45, 13)
 newGame.makeMove(24, 32)





// const FigureTypes = [{
//     name: 'queen'
// },
// {
//     name: 'bishop'
// },
// {
//     name: 'knight'
// },
// {
//     name: 'rook'
// },
// {
//     name: 'pawn'
// },
// {
//     name: 'king'
// }
// ]
// class Chessboard {
// constructor() {
//     this.squares = initialiseChessBoard()
//     // this.position = position;
//     // const squares  = [];
//     // for (let i = 0; i < 64; i++) {
//     //     squares.push({
//     //         // color: i%2?'black':'white',
//     //         // остаток от дележа итой на 2, если остаток есть то она черная, если нет, то белая
//     //         x: i % 8,
//     //         // остаток от дележа на 8ку 
//     //         y: ~~(i / 8)
//     //         // деление на 8мь и отсечение дроби у них 
//     //         // оператор ~~ отсекает дробь у чисел, он такой же как и Math.floor()
//     //     })

//     // }
// }
// getBoardState() {
//     console.log(this.squares)
// }

//     makeMove(start, end) {
//         this.checkMove(start)
//         this.checkMove(end)
//         this.getBoardState()
//     }
// }

// function initialiseChessBoard() {
// const squares = Array(64).fill(null)
// for (i = 8; i < 16; i++) {
//     squares[i] = new Pawn(2)
//     // создаю черные пешки 
// }
// for (i = 48; i < 56; i++) {
//     squares[i] = new Pawn(1)
//     // создаю белые пешки 
// }
// // белые фигуры
// squares[0] = new Rook(2)
// squares[1] = new Knight(2)
// squares[2] = new Bishop(2)
// squares[3] = new Queen(2)
// squares[4] = new King(2)
// squares[5] = new Bishop(2)
// squares[6] = new Knight(2)
// squares[7] = new Rook(2)

// // черные фигуры
// squares[57] = new Rook(1)
// squares[58] = new Knight(1)
// squares[59] = new Bishop(1)
// squares[60] = new Queen(1)
// squares[61] = new King(1)
// squares[62] = new Bishop(1)
// squares[63] = new Knight(1)
// squares[64] = new Rook(1)


// }

// class Game extends Chessboard {
// constructor() {
//     super()
//     this.state = {
//         whiteFallenSoldiers: [],
//         blackFallenSoldiers: [],
//         player: 1,
//         sourceSelection: -1,
//         turn: 'white',
//         historyOfMoves: [],
//     }
// }
// // проверка хода
// //  1. Если юзер не белый, то ходить он может только первым 
// //  2. Если допустимое знаение, пешка только на 1 или 2 клетки и назад нельзя
// //  3. Список убитых фигур 
// //  4. Сколько ходов прошло с начала игры 
// //  5. Вся история ходов 
// checkMove(i) {
//     // вырезаем весь масив 
//     const squares = this.squares.slice()
//     console.log(squares)
//     if (this.state.sourceSelection === -1) {
//         if (!squares[i] || squares[i].player !== this.state.player) {
//             console.log("Wrong selection. Choose player " + this.state.player + " pieces.")
//         } else {
//             console.log("Choose destination for the selected piece")
//             this.state.sourceSelection = i
//         }
//     } else if (this.state.sourceSelection > -1) {
//         if (squares[i] && squares[i].player === this.state.player) {
//             console.log("Wrong selection. Choose valid source and destination again.")
//             this.state.sourceSelection = -1
//         } else {

//             const squares = this.squares.slice();
//             const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
//             const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();
//             const isDestEnemyOccupied = squares[i] ? true : false;
//             const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestEnemyOccupied);
//             const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
//             const isMoveLegal = this.isMoveLegal(srcToDestPath);

//             if (isMovePossible && isMoveLegal) {
//                 if (squares[i] !== null) {
//                     if (squares[i].player === 1) {
//                         whiteFallenSoldiers.push(squares[i]);
//                     } else {
//                         blackFallenSoldiers.push(squares[i]);
//                     }
//                 }
//                 console.log("Moved!!!")
//                 squares[i] = squares[this.state.sourceSelection];
//                 squares[this.state.sourceSelection] = null;
//                 let player = this.state.player === 1 ? 2 : 1;
//                 let turn = this.state.turn === 'white' ? 'black' : 'white';
//                 this.state = {
//                     sourceSelection: -1,
//                     whiteFallenSoldiers: whiteFallenSoldiers,
//                     blackFallenSoldiers: blackFallenSoldiers,
//                     player: player,
//                     turn: turn
//                 }
//                 this.squares = squares
//             } else {
//                 console.log("Wrong selection. Choose valid source and destination again.")
//                 this.state.sourceSelection = -1
//             }
//         }
//     }
// }
// isMoveLegal(srcToDestPath) {
//     let isLegal = true;
//     for (let i = 0; i < srcToDestPath.length; i++) {
//         if (this.squares[srcToDestPath[i]] !== null) {
//             isLegal = false;
//         }
//     }
//     return isLegal;
// }
// getBoardState() {
//     console.log(this.squares)
// }
// makeMove(start, end) {
//     this.checkMove(start)
//     this.checkMove(end)
//     this.getBoardState()
// }

// blackWin() {
//     if (this.color === 'black') {
//         console.log('Black Win')
//     }
// }
// whiteWin() {
//     if (this.color === 'white') {
//         console.log('White Win')
//     }
// }

// }


// class Figure {
// constructor(player, color) {
//     this.player = player;
//     this.color = color;
// }

// move() {
//     console.log(this.type + ' is moved')
// }
// }
// class King extends Figure {
// constructor(player) {
//     super(player)
// }
// // проверяем есть ли возможность походить на это место  
// // король ходит на 1 клетку вперед,назад и по бокам 
// // его клетка - 4ая , вокруг расположены клетки которые равны 4 + 1 или 7 или 8 или 9 и так повсюду тоже самое и с белым королем только там числа отрицательные
// isMovePossible(src, dest) {
//     return (
//         src - 1 === dest ||
//         src - 9 === dest ||
//         src - 8 === dest ||
//         src - 7 === dest ||
//         src + 1 === dest ||
//         src + 9 === dest ||
//         src + 8 === dest ||
//         src + 7 === dest
//     );
// }
// getSrcToDestPath(src, dest) {
//     return [];
// }
// }
// class Pawn extends Figure {
// constructor(type, player) {
//     super(player)
//     this.type = type;
//     this.inialPositions = {
//         1: [48, 49, 50, 51, 52, 53, 54, 55],
//         2: [8, 9, 10, 11, 12, 13, 14, 15]
//     }

//     this.cantBecome = function() {
//         for (let i = 0; i < FigureTypes.length; i++) {
//             if (FigureTypes[i].name === 'king' && this.type === 'king') {
//                 console.log('Пешка не может быть королём')
//             }
//         }
//     }
// }
// isMovePossible(src, dest, isEnemyOccuped) {
//     // ходят белые, мы вычитаем из числа 8 или 7, потому что клетки на которые они могут ступить равны src - 8 или 7
//     if (this.player === 1) {
//         if ((dest === src - 8 && !isEnemyOccuped) || (dest === src - 16 && this.inialPositions[1].indexOf(src) !== -1)) {
//             return true;
//         }
//         // ходят черные мы вычитаем 9 и 7
//         else if (isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)) {
//             return true;
//         }
//     }
//     return false;
// }
// // У пешки есть такая фишка, как возможность певого хода через 1 клетку тут мы так и поступаем, ходим через 1 клетку и или  прибалвяем(ждя черных) к src 1 ход(8 ка) или удаляем 8 из него(для белых)  
// getSrcToDestPath(src, dest) {
//     if (dest = src - 16) {
//         return [src - 8]
//     } else if (dest = src + 16) {
//         return [src + 16]
//     }
//     return []
// }
// }
// class Rook extends Figure {
// constructor(player) {
//     super(player)
// }
// isMovePossible(src, dest) {
//     let mod = src % 8;
//     let diff = 8 - mod;
//     return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
// }
// getSrcToDestPath(src, dest) {
//     let path = [],
//         pathStart, pathEnd, incrementBy;
//     if (src > dest) {
//         pathStart = dest;
//         pathEnd = src;
//     } else {
//         pathStart = src;
//         pathEnd = dest;
//     }
//     if (Math.abs(src - dest) % 8 === 0) {
//         incrementBy = 8;
//         pathStart += 8;
//     } else {
//         incrementBy = 1;
//         pathStart += 1;
//     }

//     for (let i = pathStart; i < pathEnd; i += incrementBy) {
//         path.push(i);
//     }
//     return path;
// }
// }
// class Bishop extends Figure {
// constructor(player) {
//     super(player)
// }
// isMovePossible(src, dest) {
//     return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
// }
// getSrcToDestPath(src, dest) {
//     // если не ошибаюсь, то это мы рбьявляем массив и в него запихиваем 3 аргумента 
//     let path = [],
//         pathStart, pathEnd, incrementBy;
//     // если 20 больше 11 то pathStart = dest(11) а pathEnd - src(20)
//     // короче, если мы ходим вперед, то мы с 11 ти идем на 20 и соответственно нашим пунктом назначения pathEnd станет 20 src 
//     //  а точкой откуда пришли станет 11 pathStart
//     if (src > dest) {
//         pathStart = dest;
//         pathEnd = src;
//     }
//     // а если ты идешь назад, то у тебя src будет меньше чем dest и поэтому все будет выглядеть логично
//     else {
//         pathStart = src;
//         pathEnd = dest;
//     }
//     // если src = false то мы увеличиваем перменную pathStart на 9ку. Это если мы идем по правой диагонали
//     if (Math.abs(src - dest) % 9 === 0) {
//         incrementBy = 9;
//         pathStart += 9;
//     }
//     // а это если по левой диагонали
//     else {
//         incrementBy = 7;
//         pathStart += 7;
//     }
//     // увеличиваем каждый елемент на 1н если наш pathEnd больше pathStart
//     for (let i = pathStart; i < pathEnd; i += incrementBy) {
//         path.push(i);
//     }
//     return path;
// }
// }
// class Knight extends Figure {
// constructor(player) {
//     super(player)
// }
// sMovePossible(src, dest) {
//     return (src - 17 === dest ||
//         src - 10 === dest ||
//         src + 6 === dest ||
//         src + 15 === dest ||
//         src - 15 === dest ||
//         src - 6 === dest ||
//         src + 10 === dest ||
//         src + 17 === dest);
// }
// getSrcToDestPath() {
//     return [];
// }
// }
// class Queen extends Figure {
// constructor(player) {
//     super(player)
// }
// isMovePossible(src, dest) {
//     let mod = src % 8;
//     let diff = 8 - mod;

//     return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0) ||
//         (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
// }

// getSrcToDestPath(src, dest) {
//     let path = [],
//         pathStart, pathEnd, incrementBy;
//     if (src > dest) {
//         pathStart = dest;
//         pathEnd = src;
//     } else {
//         pathStart = src;
//         pathEnd = dest;
//     }
//     if (Math.abs(src - dest) % 8 === 0) {
//         incrementBy = 8;
//         pathStart += 8;
//     } else if (Math.abs(src - dest) % 9 === 0) {
//         incrementBy = 9;
//         pathStart += 9;
//     } else if (Math.abs(src - dest) % 7 === 0) {
//         incrementBy = 7;
//         pathStart += 7;
//     } else {
//         incrementBy = 1;
//         pathStart += 1;
//     }

//     for (let i = pathStart; i < pathEnd; i += incrementBy) {
//         path.push(i);
//     }
//     return path;
// }

// }


// const pawn2 = new Pawn('pawn', 'black', 'alive')
// const movepawn = pawn2.cantBecome()
// console.log(movepawn)
// const newGame = new Game()
// newGame.makeMove(52, 36)
// newGame.makeMove(12, 28)
// newGame.makeMove(61, 34)
// newGame.makeMove(8, 16)
// newGame.makeMove(59, 45)
// newGame.makeMove(16, 24)
// newGame.makeMove(45, 13)
// newGame.makeMove(24, 32)