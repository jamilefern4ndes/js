let btncriar = document.querySelector('#criar')
let dataInput = document.querySelector('#data')


dataInput.addEventListener('change', function () {
    if (dataInput.value !== '') {
        btncriar.disabled = false
    } else {
        btncriar.disabled = true
    }
})


let tela = document.querySelector('#telaPrincipal')
let newsection = document.createElement('section')

//criar uma nova sessão
function criarImagem() {
    let data = document.querySelector('#data').value
    //formatar data
    let partesData = data.split("-");
    let dataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`

    let mensagem = document.querySelector('#mensagem').value
    let autor = document.querySelector('#autor').value
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

    //divisoes
    let divData = document.createElement('div')
    divData.setAttribute('class', 'divData')
    divData.textContent = dataFormatada
    newsection.appendChild(divData)
    
    let divMsg = document.createElement('div')
    divMsg.setAttribute('class', 'divMsg')
    divMsg.textContent = `"${mensagem}"`
    newsection.appendChild(divMsg)
    
    let divAutor = document.createElement('div')
    divAutor.setAttribute('class', 'divAutor')
    divAutor.textContent = `- ${autor}`
    newsection.appendChild(divAutor)

}



