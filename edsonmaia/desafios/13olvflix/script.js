let tela = document.querySelector('.fundo')
function temaDark(){
    tela.classList.add('temaDark')
    tela.classList.remove('temaClaro')
}
function temaClaro(){
    tela.classList.add('temaClaro')
    tela.classList.remove('temaDark')
}