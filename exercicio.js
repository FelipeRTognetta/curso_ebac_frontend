"use strict";
function multiplica(num1, num2) {
    return num1 * num2;
}
function concatena(string1) {
    const string2 = 'Olá ';
    return string2 + string1;
}
const resultado = multiplica(2, 10);
console.log('o resultado é', resultado);
const saudacao = concatena('Felipe');
console.log(saudacao);
