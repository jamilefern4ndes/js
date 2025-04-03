let nQuestao = document.querySelector('#numero')
let questao = document.querySelector('#pergunta')
//seleção das alternativas
let a = document.querySelector('#altA')
let b = document.querySelector('#altB')
let c = document.querySelector('#altC')

//criação das perguntas
const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "O sol nasce no...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Leste",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "A primeira camada da Terra é a...",
    alternativaA : "Atmosfera",
    alternativaB : "Crosta",
    alternativaC : "Núcleo",
    correta      : "Crosta",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "As plantas respiram pelas...",
    alternativaA : "Raízes",
    alternativaB : "Folhas",
    alternativaC : "Cáules",
    correta      : "Folhas",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "H20 é o mesmo que...",
    alternativaA : "Ar",
    alternativaB : "Água com gás",
    alternativaC : "Água",
    correta      : "Água",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "O Sol é...",
    alternativaA : "Uma Estrela",
    alternativaB : "Um Planeta",
    alternativaC : "Uma pedra em chamas",
    correta      : "Uma Estrela",
}

const questoes = [q0, q1, q2, q3, q4, q5]

nQuestao.textContent = q1.numQuestao
questao.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')