//hora atual com condições aninhadas
var atual = new Date()
var hora = atual.getHours()
console.log (`São Exatamente ${hora}horas!`)

if (hora < 12){
    console.log('Bom dia!')
}
else if (hora < 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}