export class Pessoa{
    
    _nome 
    _idade
    _peso
    _altura
    _imc
    _classificação
    static totalPessoas = 0

    //método constructor
    constructor(nome, idade, peso, altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this.calcularIMC()
        this._classificação = this.classificaImc()
        Pessoa.totalPessoas += 1
    }

    //método específico
    calcularIMC(){
      return (this._peso / (this._altura * this._altura)).toFixed(2)
    }
    classificaImc(valorImc){
      valorImc = this._imc
      let classificacao = ''

      if(valorImc < 18.5){
        classificacao = 'Abaixo do peso'
      }
      else if (valorImc >= 18.5 && valorImc <=24.9){
        classificacao = 'Peso normal'
      }
      else if (valorImc >= 25 && valorImc <= 29.9){
        classificacao = 'Sobrepeso'
      }
      else if (valorImc >=30){
        classificacao = 'Obesidade'
      }
      return classificacao
    }
    //métodos acessores
    get nome(){      //pegar o valor
      return this._nome
    }
    get totalPessoas(){
      return Pessoa.totalPessoas
    }

    set nome(valor){      // alterar ou atribir novo
      this._nome = valor
    }
}