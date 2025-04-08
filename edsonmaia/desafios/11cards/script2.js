let foto = document.querySelector('#foto')
let nome = document.querySelector('#nome')
let idade = document.querySelector('#idade')
let altura = document.querySelector('#altura')
let tipo = document.querySelector('#tipo')

let sectionCard = document.querySelector('.card')

const url = 'cards.json'

function pegarDados(i) {
    fetch(url)
      .then( response => response.json() )
      .then( dados => {
            if(dados.erro) {
              console.log("Erro ao acessar o JSON")
              return
          }
          console.log(dados)
          let qtdpersonagens = (dados.personagens.length)
          console.log(qtdpersonagens)
          atribuirDados2(dados, i)
    })
} 

function atribuirDados (dados, i){
    foto.setAttribute('src', "personagens/"+dados.personagens[i].foto)
    nome.textContent = dados.personagens[i].nome
    idade.textContent = dados.personagens[i].idade + " anos"
    altura.textContent = (dados.personagens[i].altura).toString(2) + "m"
    tipo.textContent = dados.personagens[i].tipo
}

let imgsFoto = document.getElementsByClassName('foto')
let nomesPes       = document.getElementsByClassName('nome')
let idadePes         = document.getElementsByClassName('idade')
let alturaPes     = document.getElementsByClassName('altura')
let tipoPes        = document.getElementsByClassName('tipo')

function atribuirDados2 (dados , i){
  imgsFoto.setAttribute('src', "personagens/"+dados.personagens[i].foto)
  nomesPes.textContent = dados.personagens[i].nome
  idadePes.textContent = dados.personagens[i].idade + " anos"
  alturaPes.textContent = (dados.personagens[i].altura).toString(2) + "m"
  tipoPes.textContent = dados.personagens[i].tipo
}

function desenharCarta(id){
  //carta
  let carta = document.createElement ("article")
  carta.setAttribute('class', 'card')
  sectionCard.appendChild(carta)
  
  //fotos
  let imagem = document.createElement("img")
  imagem.setAttribute('class', 'foto')
  carta.appendChild(imagem)
  imagem.setAttribute('src', 'personagens/tokyoghoul.png')

  //informações 
  let nomePersonagem = document.createElement("h2")
  nomePersonagem.setAttribute('class', 'nome')
  carta.appendChild(nomePersonagem)
  nomePersonagem.textContent = 'nome'

  let idadePersonagem = document.createElement("h3")
  nomePersonagem.setAttribute('class', 'idade')
  carta.appendChild(idadePersonagem)
  idadePersonagem.textContent = 'idade anos'

  let alturaPersonagem = document.createElement("h2")
  nomePersonagem.setAttribute('class', 'altura')
  carta.appendChild(alturaPersonagem)
  alturaPersonagem.textContent = 'altura m'

  let tipoPersonagem = document.createElement("h2")
  nomePersonagem.setAttribute('class', 'tipo')
  carta.appendChild(tipoPersonagem)
  tipoPersonagem.textContent = 'tipo'

  pegarDados(id)
} 
//chamada da função

pegarDados(0)

desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(4)
desenharCarta(5)
desenharCarta(6)

