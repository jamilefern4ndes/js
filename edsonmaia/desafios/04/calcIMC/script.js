function calc(event) {
    event.preventDefault()
    let peso = parseFloat(document.querySelector('#ipe').value)
    let altura = parseFloat(document.querySelector('#ialt').value)
    let areaimc = document.querySelector('#imc')
    let registro = document.querySelector('#registro')
    let nome = document.querySelector('#ino').value
    let idade = document.querySelector('#idd').value
    let imc = 0;

    if (peso && altura) {
        imc = peso / (altura * altura)
        areaimc.value = imc.toFixed(2)
    } else {
        areaimc.value = "0.0"
    }
    //classificando imc
    let classi = '';
    if (imc < 18.5) {
        classi = 'Com magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classi = 'Normal';
    } else if (imc > 24.9 && imc <= 34.9) {
        classi = 'Com Sobrepeso';
    } else {
        classi = '<strong>Obeso</strong>'
    }
    // registro
    registro.innerHTML = `${nome}, ${idade} anos, <br> 
    IMC: ${imc.toFixed(2)} <br> 
    De acordo com seu IMC, você é considerado ${classi}`
}