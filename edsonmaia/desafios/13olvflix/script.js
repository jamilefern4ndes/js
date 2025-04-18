
//ajustes de tema
let tela = document.querySelector('.fundo')
function temaDark(){
    tela.classList.add('temaDark')
    tela.classList.remove('temaClaro')
}
function temaClaro(){
    tela.classList.add('temaClaro')
    tela.classList.remove('temaDark')
}

//banners

//carrossel
let numDeItens = 3
function show(i, iLista){
    let n = i 
    numdeItens = numDeItens + i
    // console.log(n + " " + numDeItens)

    let listaSelected = document.querySelector('#lista'+iLista)
    if (i == +1){
        listaSelected.scrollBy(100, 0)
    }
    if (i == -1){
        listaSelected.scrollBy(-100, 0)
    }
}
