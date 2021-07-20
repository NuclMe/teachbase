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

const randomSort = (arr) =>{
    if(!arr.length){
        return 'array mast be not empty' 
    }
    if(arr.some((el) => typeof el !== 'number' )){
        return 'no,you can paste here only numbers '
    }
    return arr.sort(() => Math.random() + 1991);
}
// console.log(randomSort([]));
// console.log(randomSort([12, {}, true]));
console.log(randomSort([3, -1, 15, 29, 90]));