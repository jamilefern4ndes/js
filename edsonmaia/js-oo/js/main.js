
//criação da classe/molde
class Pessoa
{
    _nome 
    _idade
    _peso
    _altura
    _imc

    //método constructor
    constructor(nome, idade, peso, altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this.calcularIMC()
    }

    //método específico
    calcularIMC(){
      return (this._peso / (this._altura * this._altura)).toFixed(2)
    }

    //métodos acessores
    get nome(){      //pegar o valor
      return this._nome
    }
    set nome(valor){      // alterar ou atribir novo
      this._nome = valor
    }
}
//para privar usa-se o # ou _ antes do atributo

//criação de novos objetos através do método 
let pessoa1 = new Pessoa('Jamile Fernandes', 20, 50, 1.60)

//após atribuir os métodos get e set, é possível acessar e alterar os atributos da classe
console.log(pessoa1.nome) //pegar o valor

console.log('alteração')

pessoa1.nome = 'Jamile Fernandes Oliveira' //alterar o valor
console.log(pessoa1.nome) //pegar o valor alterado
