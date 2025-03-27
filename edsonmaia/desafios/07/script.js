
//ativação do botão
function ativarbotao() {
    const valor = document.getElementById("val").value
    const opcao = document.getElementById("opcao").value
    const botao = document.getElementById("btconverter")

    if (valor > 0 && opcao !== "---") {
        botao.disabled = false
    } else {
        botao.disabled = true
    }
}
document.getElementById("val").addEventListener("input", ativarbotao);
document.getElementById("opcao").addEventListener("change", ativarbotao);

//conversão da moeda
function converter() {
    let reais = parseFloat(document.querySelector('#val').value)
    let moeda = document.querySelector('#opcao').value
    let valorConvertido = document.querySelector('#valorConvertido')
    
    // Valores ilustrativos
    const dol = 5.5
    const eur = 6.0
    const lib = 7.4

    
    if (moeda === 'dolar') {
        valorConvertido.innerHTML = `${reais} Reais em Dólar: $ ${(reais / dol).toFixed(2)}`
    } else if (moeda === 'euro') {
        valorConvertido.innerHTML = `${reais} Reais em Euro: €  ${(reais / eur).toFixed(2)}`
    } else if (moeda === 'Libra') {
        valorConvertido.innerHTML = `${reais} Reais em Libra: £ ${(reais / lib).toFixed(2)}`
    }
    //estilização
    valorConvertido.style.backgroundColor = 'rgba(0, 0, 0, 0.29)'
    valorConvertido.style.padding = '10px'
    valorConvertido.style.borderRadius = '5px'
}
