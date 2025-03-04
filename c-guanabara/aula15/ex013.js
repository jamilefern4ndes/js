//trabalhano com variaveis compostas 

let num = [2, 4, 8, 5, 9]
console.log(num) //mostrar na tela
num.push(1) //acrescente no final
num[0]= 3 //troque

console.log(`a variavel num possui ${num.length} unidades`)
console.log(`O primeiro valor é ${num[0]};`)
console.log(`A lista em ordem crescente:`)
num.sort() //coloca em ordem
for (let pos in num){
    console.log(num[pos])
}

