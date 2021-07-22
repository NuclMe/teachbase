// Калькулятор

// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, по умолчанию должны присутствовать методы add, substract

// Пример: 
// const calculator = new Calc()

// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5

// Также, он должен хранить историю всех операций и выводить ее по запросу:
 
// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */
 
// И очищать историю
// calculator.clearHistory()

function Calc(num1,operand,num2){
    this.num1 = num1;
    this.num2 = num2;
    this.operand = operand;
    let arr = [];
    // проверка не работает, не учел операнд 
    // if( typeof num1 !== 'number' && typeof num2 !== 'number'){
    //     console.log('you passe NaN' )
    //     return false;
    // } else{
    //     console.log('yeea')
              
    // }
// создал метод добавления
    this.add = function(thing) {
        this.num1 += this.num2;
        // arr.push(thing)
        return 'Я плюсонул к ' + this.num1 + 'цифру' + this.num2 + ' результат ' + `${thing}`;
    }
    // создал метод вычетания
    this.substract = function(thing) {
        this.num1 -= this.num2;
        // arr.push(thing)
        return 'Я минусанул от цифры ' + this.num1 + 'цифру' + this.num2 + ' результат ' + `${thing}`;
    }
    //создал обьект, где все доступные методы есть   
    this.allOperations = [{
            operation: '+',
            func: add
        },
        {
            operation: '-',
            func: substract
        }
    ]

    // метод создания операции для юзеров, которые ввели дату в виде (+,(a,b))
    this.addOperation = function (symbol, callback) {
        this.allOperations.push({
            operation: symbol,
            func: callback
        })
    }
    // метод очистки истории
    this.clearHistory = () => {
        this.arr = []
    }
    // метод получения доступа к истории 
    this.history = () => {
        return arr 
    }
    this.operation = function (value) {
        let splited = value.split(" ")
        let operationToDo = splited.find(value => {
            if (isNaN(value)) {
                return value
                // разбил на числа и операнды и операнд введенный взял
            }
        })
        // сравниваю операнд, который получил при переборе value сверху с чем???? 
        let operation = this.allOperations.find(operation => {
            return operation.operation === operationToDo
        })

        this.arr.push({
            operationToDo,
            operands: [+splited[0], +splited[2]]
            // добавляем первое число и второе, "+"" нужен чтобы привести к числу?
        })

        return operation.func(+splited[0], +splited[2])
    }


    return {prop: 'Prop of new object'};

}

let calculator = new Calc()
// Calculator(1,2)

console.log(calculator.operation('77 , 3'))
console.log(calculator.history)
calculator.addOperation('/', (a, b) => a / b)
console.log(calculator.operation('20 / 2'))
console.log(calculator.history)
calculator.clearHistory()
console.log(calculator.history)


// -1) написать проверку. что если операнд не равняется числу, то бить ошибку 
// 0) есть в фунцкии методы add, substract по дефолту 
// 1) Создать функцию, которая принимает метод и аргументы и что-то делает с ними 
// 2) после вычесления результата он сохраняет в массив обьектов и мы можем получить этот массив в методе history
// 3) Также по вызову методы clearHistory нам нужно очищать этот массив обьектов 
// 4) создать универсальную функцию, в которой чтобы ты не вставил в нее, оно делало операцию с двумя числами 
//  5) со значениями делать parseInt
