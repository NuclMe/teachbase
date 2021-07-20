// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент 

const arr = [1,2,3];
const newArr = [1,2,3];


function compareOfArrays(a,b){
    if(a.length != b.length){
        console.log('lengthOfArrayNotEqualToEachOther')
    }
    for(i=0; i<a.length;i++){
        if(a[i] != b[i]){
            return false
        }
    }
    return true
}
console.log(compareOfArrays(arr,newArr))
