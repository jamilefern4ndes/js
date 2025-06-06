
let imgFoto       = document.querySelector('#foto')
let nome          = document.querySelector('#nome')
let idade         = document.querySelector('#idade')
let altura        = document.querySelector('#altura')
let tipo          = document.querySelector('#tipo')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.card')

const url = 'cards.json'

function pegarDados() {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (!dados.personagens) {
                console.log("Erro: JSON não contém 'personagens'");
                return;
            }

            console.log("Quantidade de Personagens: " + dados.personagens.length);

            // Limpa cartas existentes antes de desenhar novas
            sectionConteudos.innerHTML = "";

            // Crie as cartas dinamicamente
            dados.personagens.forEach(personagem => {
                desenharCarta(personagem);
                desenharCarta(personagem)
            });
        })
    .catch(error => console.log("Erro ao carregar JSON: ", error));

}



// // atribuir dados individualmente, ou seja, so para uma carta
// // ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {
     imgFoto.setAttribute('src', "imagens/"+dados.personagens[i].foto)
     nome.textContent          = dados.personagens[i].nome
     idade.textContent         = dados.personagens[i].idade + " anos"
     tipo.textContent          = dados.personagens[i].tipo
     altura.textContent        = (dados.personagens[i].altura) + " m"
}

// SELECIONAR TODOS OS CARDS por class
let imgsFoto = document.getElementsByClassName('foto')
let nomesPersonagens         = document.getElementsByClassName('nome')
let idadePersonagens        = document.getElementsByClassName('idade')
let tipoPersonagens         = document.getElementsByClassName('tipo')
let alturaPersonagens       = document.getElementsByClassName('altura')

function atribuirDados2(dados, i) {
     imgsFoto[i].setAttribute('src', "imagens/"+dados.personagens[i].foto)
     nomesPersonagens[i].textContent         = dados.personagens[i].nome
     idadePersonagens[i].textContent         = dados.personagens[i].idade + " anos"
     tipoPersonagens[i].textContent          = dados.personagens[i].tipo
     alturaPersonagens[i].textContent        = dados.personagens[i].altura + " m"
}

function desenharCarta(personagem) {
    let carta = document.createElement("article");
    carta.setAttribute('class', 'card');
    sectionConteudos.appendChild(carta);

    let imagem = document.createElement("img");
    imagem.setAttribute('class', 'foto');
    imagem.setAttribute('src', `imagens/${personagem.foto}`);
    carta.appendChild(imagem);

    let nomePer = document.createElement("h2");
    nomePer.setAttribute('class', 'nome');
    nomePer.textContent = personagem.nome;
    carta.appendChild(nomePer);

    let idadePer = document.createElement("h3");
    idadePer.setAttribute('class', 'idade');
    idadePer.textContent = `${personagem.idade} anos`;
    carta.appendChild(idadePer);

    
    let alturaPer = document.createElement("h3");
    alturaPer.setAttribute('class', 'altura');
    alturaPer.textContent = `${personagem.altura} m`;
    carta.appendChild(alturaPer);
    
    let tipoPer = document.createElement("h3");
    tipoPer.setAttribute('class', 'tipo');
    tipoPer.textContent = personagem.tipo;
    carta.appendChild(tipoPer);
}

pegarDados(0)

desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(4)
desenharCarta(5)
desenharCarta(6)
