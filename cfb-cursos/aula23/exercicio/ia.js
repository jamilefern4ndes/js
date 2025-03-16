let operador = null; // Para armazenar o operador atual
let val = []; // Para armazenar os valores
const res = document.getElementById('valor'); // Elemento para exibir o resultado

// Adiciona eventos aos botões de operadores
document.querySelectorAll('.btop').forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText !== "=") {
            operador = button.innerText; // Define o operador
        } else {
            adicionar(); // Calcula o resultado quando "=" é clicado
        }
    });
});

// Adiciona eventos aos botões numéricos
document.querySelectorAll('.botao').forEach(button => {
    button.addEventListener('click', () => {
        const input = document.getElementById('inum');
        input.value += button.innerText; // Adiciona o número clicado ao input
    });
});

// Função para realizar o cálculo
function adicionar() {
    const num = Number(document.getElementById('inum').value);
    if (operador && num) {
        val.push(num); // Adiciona o número ao array
        const resultado = operacao(...val); // Realiza a operação
        res.innerHTML = resultado; // Exibe o resultado
        document.getElementById('inum').value = ''; // Limpa o input
        val = [resultado]; // Mantém o resultado para operações futuras
    }
}

// Função para processar operações
function operacao(...valores) {
    let resultado = valores[0]; // Primeiro valor como ponto de partida
    for (let i = 1; i < valores.length; i++) {
        if (operador === '+') {
            resultado += valores[i];
        } else if (operador === '-') {
            resultado -= valores[i];
        } else if (operador === 'x') {
            resultado *= valores[i];
        } else if (operador === '/') {
            resultado /= valores[i];
        }
    }
    return resultado; // Retorna o resultado final
}
