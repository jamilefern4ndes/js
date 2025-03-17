let tela = document.querySelector('main')
let botoes = document.getElementById('botoes')

function tema() {
    if (botoes.style.display === '' || botoes.style.display === 'none') {
        botoes.style.display = 'block';
    } else {
        botoes.style.display = 'none';
    }
}


function modoDark(){
    tela.classList.add("dark")
    tela.classList.remove("light")
    tela.classList.remove("lgbt")
}
function modoLight(){
    tela.classList.add("light")
    tela.classList.remove("dark")
    tela.classList.remove("lgbt")
}
function modoBlue(){
    tela.classList.add("lgbt")
    tela.classList.remove("dark")
    tela.classList.remove("light")
}