
let tela = document.querySelector('#telaPrincipal')
let newsection = document.createElement('section')

//criar uma nova sessão
function novaSessao() {
    tela.innerHTML = ""
    tela.appendChild(newsection)
    newsection.setAttribute('class', 'novasessao')

    let btnreload = document.createElement('button')
    btnreload.setAttribute('class', 'btnreload')
    btnreload.innerText = 'Nova Mensagem'
    tela.appendChild(btnreload)

    btnreload.addEventListener("click", function () {
        location.reload() 
    });

    criarMensagem()
}

//criar uma mensagem
function criarMensagem() {
    let data = document.querySelector('#data').value
    console.log(data)
    let mensagem = document.querySelector('#mensagem').value
    let autor = document.querySelector('#autor').value

    // Divisórias
    let divData = document.createElement('div')
    divData.setAttribute('class', 'divData')
    divData.textContent = `Data: ${data}`
    newsection.appendChild(divData)

    let divMsg = document.createElement('div')
    divMsg.setAttribute('class', 'divMsg')
    divMsg.textContent = `Mensagem: ${mensagem}`
    newsection.appendChild(divMsg)

    let divAutor = document.createElement('div')
    divAutor.setAttribute('class', 'divAutor')
    divAutor.textContent = `Autor: ${autor}`
    newsection.appendChild(divAutor)
}
