// função anônima

let f = function(v1, v2){
    return v1+v2
}
console.log(f(10,7))

//função construtora
let c = new Function("v1", "v2", "return v1*v2")
console.log(c(2,5))