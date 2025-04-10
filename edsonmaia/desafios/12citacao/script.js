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
let newsection = document.createElement('picture')


function criarImagem() {
    let data = document.querySelector('#data').value
    //formatar data
    let partesData = data.split("-");
    let dataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`

    let mensagem = document.querySelector('#mensagem').value
    let autor = document.querySelector('#autor').value
     
    //criar sessão
    tela.innerHTML = ""
    tela.appendChild(newsection)
    newsection.setAttribute('class', 'novasessao')

    //botões
    let btnNewBackground = document.createElement('button')
    btnNewBackground.setAttribute('class', 'btnNewBackground')
    btnNewBackground.innerText = 'alterar fundo'
    tela.appendChild(btnNewBackground)
    btnNewBackground.addEventListener("click", mudarFundo)

    let btnDownload = document.createElement('button')
    btnDownload.setAttribute('class', 'btnDownload')
    btnDownload.innerText = 'Download'
    btnDownload.addEventListener('click', downloadSection)
    tela.appendChild(btnDownload)

    let btnreload = document.createElement('button')
    btnreload.setAttribute('class', 'btnreload')
    btnreload.innerText = 'Nova Mensagem'
    tela.appendChild(btnreload)
    btnreload.addEventListener("click", reload)

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
function reload(){
    location.reload()
}
let fundo = 0
function mudarFundo(){
    fundo ++
    newsection.style.backgroundImage = `url('imagens/fundo${fundo}.jpeg')`
    console.log(fundo)
    if (fundo > 6){
        fundo = 1
    }
}
function downloadSection() {
    html2canvas(newsection).then(canvas => {
        // Converção
        let imageLink = document.createElement('a')
        imageLink.href = canvas.toDataURL('image/png')
        imageLink.download = 'suamensagem.png'
        imageLink.click()
    });
}

