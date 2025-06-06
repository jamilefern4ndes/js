//digite uma valor de 1 a 26 e veja as letras do alfabeto 
const valor = 2


const alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z"]
const letras = alfa[valor - 1]
const array = [];

for (i = 0; i < valor; i++) {
    array.push(alfa[i])
}

console.log(array);

