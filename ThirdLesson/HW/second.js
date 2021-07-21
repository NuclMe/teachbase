// Кэширование

// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.

// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат. 
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

// Пример:  
// const calculate = cache();

// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}

function cache() {
    let arr = [];
    return function (a, b) {
        let isCached = false;
        let value = 0;
        let cacheIndex = 0;

        arr.forEach(function (first, second) {
            if (first.a === a && first.b === b) {
                isCached = true
                cacheIndex = second
            }
        });
        if (isCached) {
            value = arr[cacheIndex].value  
        } else {
            value = Math.pow(a, b)
            arr.push({
                a,
                b,
                value
            })
        }
        return { value, isCached }
    }
}
const calculate = cache()


// console.log(calculate(3, 3)) // { value: 27, fromCache: false}
// console.log(calculate(2, 10)) // { value: 1024, fromCache: false}
console.log(calculate(2, 10)) // { value: 1024, fromCache: true}
console.log(calculate(2, 10)) // { value: 1024, fromCache: true}

// 0) записывать аргумент и их результат 
// 1) проверять есть ли такие аргументы или нет
// 2) если есть, то выкидывать результат сразу 
// 2) выводить это все в обьекте  
// const calculate = cache();

// console.log(calculate(2, 2));
// console.log(calculate(2, 2));
// console.log(calculate(2, 2));