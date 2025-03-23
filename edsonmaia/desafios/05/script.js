let audio = document.querySelector('#audio')
let botao = document.querySelector('#sortear')
let dado = document.querySelector("#imagemdado")
let animacao = document.querySelector('.imagem')
let tela = document.querySelector('#tela')

function sorteio(){

    audio.play()
    let numsort = Math.floor(Math.random()*6)+1
    console.log (numsort)
    botao.style.display = 'none'
    animacao.classList.add('balanco')
    dado.setAttribute('src', `dado/dado0.png`)

    setTimeout (function (){
        dado.setAttribute('src', `dado/dado${numsort}.png`)
        botao.style.display = 'block'
        animacao.classList.remove('balanco')
    },1000)

}

function temadark(){
    tela.classList.remove('light')
    tela.classList.add('dark')
    dado.classList.add('darkimg')
}
function temalight(){
    tela.classList.add('light')
    tela.classList.remove('dark')
    dado.classList.remove('darkimg')
}
let botoes = document.getElementById('botao')

function tema() {
    if (botoes.style.display === '' || botoes.style.display === 'none') {
        botoes.style.display = 'block';
    } else {
        botoes.style.display = 'none';
    }
}