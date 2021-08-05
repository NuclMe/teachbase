// план
// 1) Класс фигура с методами и свойствами 
// 2  дочерние классы со своими методами и свойствами  
// 3) класс самой игры
// 4) класс игроков(белый и черный)
// 5) класс поля 
const FigureTypes = [
    {name:'queen'},
    {name:'bishop'},
    {name:'knight'},
    {name:'rook'},
    {name:'pawn'},
    {name:'king'}
]
class Chessboard{
    constructor(position){
        // this.position = position;
        const cells = [];
        for(let i=0; i<64; i++){
            cells.push({
                // color: i%2?'black':'white',
                // остаток от дележа итой на 2, если остаток есть то она черная, если нет, то белая
                x:i%8,
                // остаток от дележа на 8ку 
                y:~~(i/8)
                // деление на 8мь и отсечение дроби у них 
                // оператор ~~ отсекает дробь у чисел, он такой же как и Math.floor()
            })
            
        }
        console.log(cells)

        // const SQUARES = {
        //     a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
        //     a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
        //     a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
        //     a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
        //     a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
        //     a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
        //     a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
        //     a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
        //   }; 
   
    }
}

function initialiseChessBoard(){
    const squares = Array(64).fill(null)
    console.log(squares)
    for(i=8; i<16; i++){
        squares[i] = new Pawn(2)
    // создаю черные пешки 
    }
    for (i = 48; i< 56; i++){
        squares[i] = new Pawn(1)
            // создаю белые пешки 
    }      
    // белые фигуры
    squares[0] =  new Rook(2)
    squares[1] =  new Knight(2)
    squares[2] =  new Bishop(2)
    squares[3] =  new Queen(2)
    squares[4] =  new King(2)
    squares[5] =  new Bishop(2)
    squares[6] =  new Knight(2)
    squares[7] =  new Rook(2)

    // черные фигуры
    squares[57] =  new Rook(1)
    squares[58] =  new Knight(1)
    squares[59] =  new Bishop(1)
    squares[60] =  new Queen(1)
    squares[61] =  new King(1)
    squares[62] =  new Bishop(1)
    squares[63] =  new Knight(1)
    squares[64] =  new Rook(1)

    
}


const newche = new Chessboard();
class Game{
    constructor(color){
        this.color = color;
    }
    blackWin(){
            if(this.color === 'black'){
                console.log('Black Win')
            }
    }
    whiteWin(){
            if(this.color === 'white'){
                console.log('White Win')
            }
    }
}

const game = new Game('black')
const ololo = game.blackWin()
console.log(ololo)

class Figure{
    constructor(player,color){
        this.player = player;
        this.color = color;
    }
   
    move(){
        console.log(this.type + ' is moved')
    }
}
class King extends Figure{
    constructor(player){
        super(player)
    }
    // проверяем есть ли возможность походить на это место  
    // король ходит на 1 клетку вперед,назад и по бокам 
    // его клетка - 4ая , вокруг расположены клетки которые равны 4 + 1 или 7 или 8 или 9 и так повсюду тоже самое и с белым королем только там числа отрицательные
    isMovePossible(src,dest){
        return (
            src - 1 === dest ||
            src - 9 === dest || 
            src - 8 === dest || 
            src - 7 === dest || 
            src + 1 === dest || 
            src + 9 === dest || 
            src + 8 === dest || 
            src + 7 === dest  
            );
    }
    getSrcToDestPath(src, dest){
        return [];
      }
}
class Pawn extends Figure{
    constructor(type,player){
        super(player)
        this.type=type;
        this.cantBecome = function(){
            for(let i = 0; i<FigureTypes.length; i++){
                if(FigureTypes[i].name === 'king' && this.type === 'king'){
                   console.log('Пешка не может быть королём')
                }
            }
        }
    }
}
class Rook extends Figure{
    constructor(player){
        super(player)
    }
    isMovePossible(src, dest){
        let mod = src % 8;
        let diff = 8 - mod;
        return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
      }
      getSrcToDestPath(src, dest){
        let path = [], pathStart, pathEnd, incrementBy;
        if(src > dest){
          pathStart = dest;
          pathEnd = src;
        }
        else{
          pathStart = src;
          pathEnd = dest;
        }
        if(Math.abs(src - dest) % 8 === 0){
          incrementBy = 8;
          pathStart += 8;
        }
        else{
          incrementBy = 1;
          pathStart += 1;
        }
    
        for(let i = pathStart; i < pathEnd; i+=incrementBy){
          path.push(i);
        }
        return path;
      }
}
class Bishop extends Figure{
    constructor(player){
        super(player)
    }
    isMovePossible(src, dest){
        return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
    }   
    getSrcToDestPath(src, dest){
        // если не ошибаюсь, то это мы рбьявляем массив и в него запихиваем 3 аргумента 
        let path = [], pathStart, pathEnd, incrementBy;
        // если 20 больше 11 то pathStart = dest(11) а pathEnd - src(20)
        // короче, если мы ходим вперед, то мы с 11 ти идем на 20 и соответственно нашим пунктом назначения pathEnd станет 20 src 
        //  а точкой откуда пришли станет 11 pathStart
        if(src > dest){ 
          pathStart = dest;
          pathEnd = src;
        }
        // а если ты идешь назад, то у тебя src будет меньше чем dest и поэтому все будет выглядеть логично
        else{
          pathStart = src;
          pathEnd = dest;
        }
        // если src = false то мы увеличиваем перменную pathStart на 9ку. Это если мы идем по правой диагонали
        if(Math.abs(src - dest) % 9 === 0){
          incrementBy = 9;
          pathStart += 9;
        }
    // а это если по левой диагонали
        else{
          incrementBy = 7;
          pathStart += 7;
        }
        // увеличиваем каждый елемент на 1н если наш pathEnd больше pathStart
        for(let i = pathStart; i < pathEnd; i+=incrementBy){
          path.push(i);
        }
        return path;
      }
}
class Knight extends Figure{
    constructor(player){
        super(player)
    }
}
class Queen extends Figure{
    constructor(player){
        super(player)
    }
    isMovePossible(src, dest){
        let mod = src % 8;
        let diff = 8 - mod;
        
        return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0) ||
          (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
      }

    getSrcToDestPath(src, dest){
        let path = [], pathStart, pathEnd, incrementBy;
        if(src > dest){
            pathStart = dest;
            pathEnd = src;
        }
        else{
            pathStart = src;
            pathEnd = dest;
        }
        if(Math.abs(src - dest) % 8 === 0){
            incrementBy = 8;
            pathStart += 8;
        }
        else if(Math.abs(src - dest) % 9 === 0){
            incrementBy = 9;
            pathStart += 9;
        }
        else if(Math.abs(src - dest) % 7 === 0){
            incrementBy = 7;
            pathStart += 7;
        }
        else{
            incrementBy = 1;
            pathStart += 1;
        }

        for(let i = pathStart; i < pathEnd; i+=incrementBy){
            path.push(i);
        }
        return path;
    }
    
}


const pawn2 = new Pawn('pawn','black','alive')
const movepawn = pawn2.cantBecome()
console.log(movepawn)