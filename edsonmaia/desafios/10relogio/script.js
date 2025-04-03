let atual = new Date()
const formatarDoisAlgarismos = (valor) => valor.toString().padStart(2, '0')

//configurando hora
let hora = formatarDoisAlgarismos(atual.getHours())
let minutos = formatarDoisAlgarismos(atual.getMinutes())
let segundos = formatarDoisAlgarismos(atual.getSeconds())

document.querySelector('#hora').textContent = `${hora}:${minutos}:${segundos}`

//configurando data
let dia = formatarDoisAlgarismos(atual.getDate())
let mes = formatarDoisAlgarismos(atual.getMonth())
let ano = atual.getFullYear()

//dia da semana
let diaSemana = atual.getDay()
let areaDiaSemana = document.querySelector('#dia')

switch (diaSemana) { 
    case 0: 
        areaDiaSemana.textContent = 'Dom';
        break;
    case 1: 
        areaDiaSemana.textContent = 'Seg';
        break;
    case 2: 
        areaDiaSemana.textContent = 'Ter';
        break;
    case 3: 
        areaDiaSemana.textContent = 'Qua';
        break;
    case 4: 
        areaDiaSemana.textContent = 'Qui';
        break;
    case 5: 
        areaDiaSemana.textContent = 'Sex';
        break;
    case 6: 
        areaDiaSemana.textContent = 'Sáb';
        break;
    default:
        areaDiaSemana.textContent = 'Dia inválido'
}
document.querySelector('#data').textContent = `${dia}/${mes}/${ano}`

setInterval(() =>{
    location.reload()
},1000)

//estilo
areaDiaSemana.classList.add('diaSemana')

