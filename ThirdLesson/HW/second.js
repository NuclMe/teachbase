// Кэширование

// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.

// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат. 
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

// Пример:  
// const calculate = cache();

// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}

// План
// 0) получить аргументы в функции 
// 1) проверять есть ли такие аргументы в массиве или нет
// 2) если нет, то пушить в массив их и их результат  
// 3) если есть, идти в массив брать результат и выкидывать его в обьект + менять переменную на isCached = true 
// 4) выводить это все в обьекте  

function cache() {
    let arr = [];
    // создали пустой массив, в который будем пушить результат возведения в степень
    return function (a, b) {
        let isCached = false;
        let value = 0;
        let cacheIndex = 0;
        // создали функцию, которая принимает два аргумента на вход(первое и второе число) 
        // по дефолту ничего не кешируется, значение возведения в степень равно ноль + индекс елемента в массиве нулевой
        arr.forEach(function (first, second) {
            if (first.a === a && first.b === b) {
                isCached = true
                cacheIndex = second
            }
        });
        // для каждого еллемента массива arr мы будем сравнивать его с каждым елементом, который уже есть в массиве
        // если будем находить елементы которые равны, то мы также мы будем менять isCached на true и записывать в cacheIndex индекс параметров (a,b)
        if (isCached) {
            // console.log(   value = arr[cacheIndex].value  )
            value = arr[cacheIndex].value
            // arr[cacheIndex].value записываем в переменную value значение(.value) индекса елемента(cacheIndex), который был при проверке на кеш найден 
            // тут мы проверяем если числа из кеша  то записываем в переменную value массив пустой и в него пихаем индекс значения, который мы вичеслили выше
        } else {
            // если значение не из кеша(уникальное), то мы возводим его в степень и пушим в массив
            value = Math.pow(a, b)
            arr.push({
                a,
                b,
                value 
            })
        }
        // по дефолту возвращаем в обьекте само значение(value), которое сравнивается с существующим выше и было ли оно закешировано. По дефолту кеш = false, но выше есть проверка на кеш + если вернуло из кеша значение, то и перемення isCached будет меняться на true
        return { value, isCached }
    }
}
const calculate = cache()


console.log(calculate(3, 3)) // { value: 27, fromCache: false}
// console.log(calculate(2, 10)) // { value: 1024, fromCache: false}
console.log(calculate(2, 10)) // { value: 1024, fromCache: true}
console.log(calculate(2, 10)) // { value: 1024, fromCache: true}
// console.log(calculate(2, 2));
// console.log(calculate(2, 2));
// console.log(calculate(2, 2));