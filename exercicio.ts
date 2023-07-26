function multiplica(num1: number, num2: number): number {
    return num1 * num2;
}

function concatena(string1: string): string {
    const string2: string = 'Olá '
    return string2 + string1;
}


const resultado = multiplica(2, 10);
console.log('o resultado é' , resultado);

const saudacao = concatena('Felipe');
console.log(saudacao);
