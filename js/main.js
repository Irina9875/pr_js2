'use strict';
// 1
let name = "джон";
let admin = name;
alert(admin);


// 2

let gorod = prompt("введите название города");
let year = prompt("введите год образования");
let people = prompt("введите численность населения");
let age = 2024-year;
alert(`Городу ${gorod} исполнилось ${age} лет с момента его образования. Население - ${people} человек`);

// 3 
 
let r = prompt('введите радиус круга'); 
let S = Math.PI * (r ** 2); 
alert(`площадь круга с радиусом ${r} равна ${S}`); 
 
// 4
 
let num1 = +prompt('введите первое число'); 
let num2 = +prompt('введите второе число'); 
alert(`сумма = ${num1 + num2}, разность = ${num1-num2}, частное = ${num1 / num2}, произведение = ${num1 * num2}`);