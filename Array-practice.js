const empoloyees = [
    {
        salary:'2000',
        firstNAME : 'Alex',
        lastNAME: 'Ivanov',
        email: 'serhii.saltan@gotoinc.co',
        gender: 'Male',
        officeIp: '3.4.5.7.989',
        age: 89,
    
    },
    {
        salary:'2050',
        firstNAME : 'Oleg',
        lastNAME: 'Orlov',
        email: 'mankent@gmail.com',
        gender: 'Male',
        officeIp: '4.6.5.7.989',
        age: 39,
    
    },
    {
        salary:'4589',
        firstNAME : 'Kostya',
        lastNAME: 'Voronin',
        email: 'kosvor@yandex.ru',
        gender: 'Female',
        officeIp: '4.5.6.90',
        age: 15,
    },
]
            // forEach
// const forEachCallback = function(item){
//     console.log('Employee name', item.firstNAME,  item.lastNAME)
// };
// empoloyees.forEach(forEachCallback)

// запись выше еквивалентна этой
// for(let i = 0; i<empoloyees.length; i++){
//     console.log('Employee name', item.firstNAME,  item.lastNAME)
// }

                            // map
// const mapCallback = function(item){
//     return item.firstNAME + '' + item.lastNAME
// }

// const namesList = empoloyees.map(mapCallback) 
// // выкинули имена 
// const lastNames = namesList.map(function(item){
//     return item.split(' ')[1]
// })
// console.log(namesList)

     // reduce
// в reduce 2 параметром обязательно нужно передавать аккумулятор, его первое значение  
    //  const reduceCallback = function(acc,item){
    //     return acc + Number(item.salary)
    // };

    // const overlaySalary = empoloyees.reduce(reduceCallback,0) 
    // console.log(overlaySalary)

    // sort
//  какой из обьектов должна стоять раньше
//  принимает 2 елемента, это некие елементы массива, которые будут связываться между собой, не имеют привязки к индексам , 2 любых елемента
// https://basicweb.ru/javascript/js_array_sort.php 
// Функция, определяющую порядок сортировки элементов массива. Если функция сравнения используется (необязательный параметр), то должна возвращать одно из следующих значений:
    // 1) Отрицательное значение, если первый переданный аргумент меньше второго аргумента. В этом случае первый сравниваемый элемент будет расположен по меньшему индексу, чем второй.
    // 2) Ноль, если аргументы эквивалентны. Сравниваемые элементы массива останутся неизменными по отношению друг к другу, но будут отсортированы по отношению ко всем другим элементам.
    // 3) Положительное значение, если первый аргумент больше второго аргумента. В этом случае второй сравниваемый элемент будет расположен по меньшему индексу, чем первый.
    const sortCallback = function(a,b){
        return a.age - b.age;     
            //   можно этот способ юзать, можно и тот через if else,что ниже,этот просто проще
        // если возраст елемента b >(больше) возраста елемента а то мы вернем отрицательное число и поставим a раньше 
        // если возраст b меньше то мы его первым вернем 
        // если при вычетании ноль, то ети елементы распоожены как надо 
        // if(a.age < b.age){
        //     return 1
        // } else if(a.age > b.age){
        //     return -1
        // } else{
        //     return 0 
        // }

};

// const sortedByAge = empoloyees.sort(sortCallback);
// console.log(sortedByAge)

                            // ПРОВЕРЯЮЩИЕ МЕТОДЫ
// const someCallback = function(item){
//     return Number(item.salary) > 7000;
// }
// const lastNameList = empoloyees.map(function(item){
//     return item.lastNAME
// })
// const checkResult = lastNameList.includes('Voronin')
// console.log(checkResult)
// const salarsyCheckResult = empoloyees.some(someCallback)
// console.log(salaryCheckResult)

// методы ПОИСКА
const filterBack = function(item){
    return item.age < 60
}
// filter выведет все совпадения в виде МАССИВА
// const filteredList = empoloyees.filter(filterBack);
// find выведет первое совпадение в виде ОБЬЕКТА 
// const filteredList = empoloyees.find(filterBack);
// console.log(filteredList)

// CHANING 

const ageFilter = function(item){
    return item.age > 50;
}
const getSalary = function(acc,item){
    return acc + Number(item.salary);
}
const overAllSeniorSalary = empoloyees.filter(ageFilter).reduce(getSalary,0)
console.log(overAllSeniorSalary)