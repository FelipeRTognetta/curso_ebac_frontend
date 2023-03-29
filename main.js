const form = document.getElementById('form-exercice')
const numeroB = document.getElementById('B')


function validaNumero (a, b) {
    return a < b
}


form.addEventListener('submit', function(e){

    const valueA = parseFloat(document.getElementById("A").value);
    const valueB = parseFloat(document.getElementById("B").value);

    e.preventDefault();

    const response = document.getElementById("response-message")
    numeroValido = validaNumero (valueA, valueB)
    
    if (!numeroValido){
        response.classList.add('error-message')
        response.innerHTML= "O segundo número precisa ser maior"
        response.classList.remove('success-message')
    } 
    else {
        response.classList.add('success-message')
        response.innerHTML= "Bem sucedido!"
        response.classList.remove('error-message')
    }
})