
const agenda = document.getElementById("agenda")
const nomes = []
const numeros = []

let linha = "";
let linhas = "";

agenda.addEventListener("submit", function(e) {
    e.preventDefault()

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById("nome-contato").value;
    const inputNumero = document.getElementById("numero-contato").value;

    if (nomes.includes(inputNome)) {
        alert(`O contato: ${inputNome} ja existe`);
    } else {
        nomes.push(inputNome);
        numeros.push(inputNumero);
        
        let linha = `<tr>`
        linha += `<td> ${inputNome}</td>`;
        linha += `<td> ${inputNumero}</td>`;
        linha += `</tr>`

        linhas += linha
    }

    document.getElementById("nome-contato").value = "";
    document.getElementById("numero-contato").value = "";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}