// Определить порядок выполнения операторов с помощью таблицы приоритетов операций.
// Напишите в ответе на задание этот порядок для каждого выражения и результат всех переменных присвоений.
1.  
// var x = 6, y = 15, z = 4; 
// y /= x + 5 % z; 

// изначально выполнится "/=" потом "+" и в самом конце "%" 
// y = y/6 = 2,5 + 5 = 7,5/4=1,87

// 2.  
// var x = 6, y = 15, z = 4; 
// z = x++ + y * 5; 
// z = 6 + 15 = 21 * 5 = 105
// изначально выполнится "+" потом "*" и в самом конце "++" 

// 3.  
var x = 6, y = 15, z = 4; 
x += y - x++ * z; 
// изначально выполнится "+=" потом "-" и в самом конце "++" 

// 4.  
// var x = 6, y = 15, z = 4; 
// z = -- x - y * 5; 
//  5. 
// var a = 3;  
// var b = ++a + 1 + a++;

let a = 5;
let b = a++;
console.log(b)
console.log(a)

