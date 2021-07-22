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

function Calc() {
    function add(){
        a + b
    }

    this.substract = () =>{
        a - b
    }

    this.history = []
    this.allUsedOperatorsWithMethods = [{
        operator:'+',
        func: add
    },
    {
        operator:'-',
        func: substract
    }
]
    console.log(this.history)
}
Calc(1,3)




// -1) написать проверку. что если операнд не равняется числу, то бить ошибку 
// 0) есть в фунцкии методы add, substract по дефолту 
// 1) Создать функцию, которая принимает метод и аргументы и что-то делает с ними 
// 2) после вычесления результата он сохраняет в массив обьектов и мы можем получить этот массив в методе history
// 3) Также по вызову методы clearHistory нам нужно очищать этот массив обьектов 
// 4) создать универсальную функцию, в которой чтобы ты не вставил в нее, оно делало операцию с двумя числами 
//  5) со значениями делать parseInt
