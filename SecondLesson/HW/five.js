// Нужно выполнить с ним следующие преобразования:
// 1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]
// 1 START
// const size = employees.length
// const averageSalaryCallback = function(acc,item){
//     return acc + Number(item.salary) / size
// }
// const overlaySalary = employees.reduce(averageSalaryCallback,0)
// console.log(overlaySalary)
// 1 END

// 2 START
// const salaryRangeCallback = function(a,b){
//     return b.salary - a.salary;   
// }
// const sortedByAge = employees.sort(salaryRangeCallback);
// console.log(sortedByAge)
// 2 END

// 3 START
const ageFilter = function(item){
    return item.age > 25 && item.salary > 4500 ;
}

const overAllSeniorSalary = employees.filter(ageFilter)
console.log(overAllSeniorSalary)
// 3 END