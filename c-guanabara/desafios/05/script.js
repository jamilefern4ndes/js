let num = document.getElementById('valor')
let area = document.getElementById('info')
let local = document.getElementsByTagName('fieldset')[0]
let valores = []

let soma = 0
let media = 0
let maior = 0


function adicionar(){
    valores.push(Number(num.value)) 
    soma += Number(num.value)
    media = soma/valores.length
    media.toFixed(3)
    if (num.value >maior ){
        maior = num.value
    }
}  


function finalizado(){
    local.style.display = 'block'
    area.innerHTML =
     `<p>${valores}</p>
     <p>${valores.length } Valores foram adicionados;</p>
     <p>O maior valor foi ${maior};</p>
     <p>${soma} É a soma entre todos eles;</p>
     <p>E ${media} é a média.</p>`
}