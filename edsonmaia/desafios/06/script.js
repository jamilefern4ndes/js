let retorno = document.querySelector('#retorno')
let bt = document.querySelector('#btverificar')

bt.addEventListener('click', function () {
    let user = parseInt(document.querySelector('#valuser').value)
    let pc = Math.floor(Math.random() * 6) + 1
    console.log(pc)
    
    if (user == pc) {
        retorno.innerHTML = 'Parabéns! <br> Você acertou.'
        retorno.classList.remove ('errou')
        retorno.classList.add('acertou')
    
    } else if (user == ' ' || user > 6 || user < 1){
        retorno.innerHTML = 'Digite um valor <br> entre 1 e 6.'
    }
    else{
        retorno.innerHTML = 'Errou! <br> Tente Outra vez.'
        retorno.classList.add ('errou')
        retorno.classList.remove('acertou')
    }
    document.querySelector('#valuser').value = ''
})

let tocaaudio = document.querySelector('#audio')
let controle = false
let btmusica = document.querySelector('#musica')
function audio(){
    if (controle){
        tocaaudio.pause()
        controle = false
        btmusica.innerHTML = '🔈'
    } else {
        tocaaudio.play()
        controle = true
        btmusica.innerHTML = '🔊'
    }
}