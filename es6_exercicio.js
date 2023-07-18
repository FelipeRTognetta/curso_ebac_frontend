const students = [
    {
        nome: 'Felipe',
        nota: 8 
    },
    {
        nome: 'Larissa',
        nota: 10 
    },
    {
        nome: 'Lucas',
        nota: 6 
    },
    {
        nome: 'Matheus',
        nota: 3 
    },
]

const pass = students.filter(n => n.nota >= 6);

console.log(pass);

