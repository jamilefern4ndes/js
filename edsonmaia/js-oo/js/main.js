import { Pessoa } from './Pessoa.js'

//criação de novos objetos através do método 
let pessoa1 = new Pessoa('Jamile Fernandes', 20, 50, 1.60)
let pessoa2 = new Pessoa('João Silva', 30, 70, 1.75)
let pessoa3 = new Pessoa('Vivian Costa', 15, 45, 1.75)

console.log('total de pessoas: ' + Pessoa.totalPessoas)

// //após atribuir os métodos get e set, é possível acessar e alterar os atributos da classe
console.log(pessoa1) //pegar o valor
console.log(pessoa2)
console.log(pessoa3)


// console.log('alteração')

// pessoa1.nome = 'Jamile Fernandes Oliveira' //alterar o valor
// console.log(pessoa1.nome) //pegar o valor alterado
