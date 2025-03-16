// ordenar valores

const ordem = n =>{
    n.sort((a, b) => a - b)
    return n 
}
let list = [10, 3, 12, 6,4,9,1,16]
console.log(ordem(list))