let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarClick(Console) {
    console.log('O botão foi clicado')
};
function alerta(Alerta) {
    alert('Eu amo JS')
};

function cidadeDoBrasil(Prompt) {
    let cidade = prompt('Diga uma cidade do Brasil:');
    return alert ( `Estive em  ${cidade} e lembrei de você!`);
};
function soma(Soma) {
    let num1 = parseInt(prompt('Digite um número de 1 a 20:'));
    let num2 = parseInt(prompt('Digite outro número de 1 a 20:'));
    let resultado = num1 + num2;
     alert(`${num1} + ${num2} = ${resultado}`);
};


