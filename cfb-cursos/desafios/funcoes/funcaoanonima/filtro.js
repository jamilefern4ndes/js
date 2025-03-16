//filtro de pares

const filtro = (valores) => {
    return valores.filter((val) => val % 2 === 0);
}
let quant = 14
let valores = []
for (let i = 0; i <= quant; i++) {
    valores.push(i)
}

console.log(filtro(valores))
