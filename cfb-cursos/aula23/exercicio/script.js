// script criado por mim inacabado e sem interação com os botões numéricos. 
// terá evolução conforme andamento do curso 

var operador = 'x'
function operacao(...valores) {

    let res = (operador === 'x' || operador === '/') ? 1 : 0 
    for (let v of valores) {
        if (operador == 'x') {
            res = res * v
        } else if (operador == '+') {
            res += v
        } else if (operador == '-') {
            res -= v
        } else if (operador == '/') {
            res /= v
        }
    }
    return res
}
//limpar
function limpar(){
    val = 0
}
//interação html e chamada da 2° função
var val = []
var calc = document.getElementById('valor')
function adicionar() {
    var num = Number(document.getElementById('inum').value)
    val.push(num)
    calc.innerHTML = operacao(...val)
}

