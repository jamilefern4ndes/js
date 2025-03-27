function converter() {
    let reais = parseFloat(document.querySelector('#val').value)
    let moeda = document.querySelector('#opcao').value
    let valorConvertido = document.querySelector('#valorConvertido')
    
    // Valores ilustrativos
    const dol = 5.5
    const eur = 6.0
    const lib = 7.4

    if (moeda === 'dolar') {
        valorConvertido.innerHTML = `${reais} Reais em Dólar: ${(reais * dol).toFixed(2)}`
    } else if (moeda === 'euro') {
        valorConvertido.innerHTML = `${reais} Reais em Euro: ${(reais * eur).toFixed(2)}`
    } else if (moeda === 'Libra') {
        valorConvertido.innerHTML = `${reais} Reais em Libra: ${(reais * lib).toFixed(2)}`
    } else {
        valorConvertido.innerHTML = 'Por favor, selecione uma moeda válida.'
    }
}
