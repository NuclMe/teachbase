// Определить порядок выполнения операторов с помощью таблицы приоритетов операций.
// Напишите в ответе на задание этот порядок для каждого выражения и результат всех переменных присвоений.
1.  
var x = 6, y = 15, z = 4; 
y /= x + 5 % z; 

// изначально выполнится "%" потом "+" и в самом конце "/= " 
// y = 6/6 = 1 +5 = 6%4 = 2

// 5 % 4 = 0.2 
// x(6) + 0.2 = 6.2 - (/=) 6 = 0.2

// 2.  
// var x = 6, y = 15, z = 4; 
// z = x++ + y * 5; 
// z = 6 + 15 = 21 * 5 = 105
// изначально выполнится "+" потом "*" и в самом конце "++" 

// 3.  
var x = 6, y = 15, z = 4; 
x += y - x++ * z; 
// изначально выполнится "x++ (prefix increment)" потом "*", потом * и в самом конце "-" 

// 6*4 = 20
// 15-20 = -5

// 4.  
// var x = 6, y = 15, z = 4; 
// z = -- x - y * 5; 
// изначально выполнится "--x(постфиксный декремент)" потом "-", и в самом конце "*" 
// z = 6-1=5 - 15 = -10 * 5 = 50 

//  5. 
// var a = 3;  
// var b = ++a + 1 + a++; 

//  ..++  '17'    + '13'  ++... 16
// сначала ..++ потом + ++...  
// 3(a++) ++1 (++a) ++1 + 1 =  6


// плюс бывает унарный (не прибавляет а преобразует в число) и бинарный, складывает


