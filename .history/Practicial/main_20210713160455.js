// Определить порядок выполнения операторов с помощью таблицы приоритетов операций.
// Напишите в ответе на задание этот порядок для каждого выражения и результат всех переменных присвоений.
1.  
var x = 6, y = 15, z = 4; 
y /= x + 5 % z; 
2.  
var x = 6, y = 15, z = 4; 
z = x++ + y * 5; 
3.  
var x = 6, y = 15, z = 4; 
x += y - x++ * z; 
4.  
var x = 6, y = 15, z = 4; 
z = -- x - y * 5; 
 5. 
var a = 3;  
var b = ++a + 1 + a++;