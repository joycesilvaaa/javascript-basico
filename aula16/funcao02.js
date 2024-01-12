function soma(a , b){
    return a + b
}
console.log(soma(1,1))
// com parametros pré definidos caso a pessoa não digite um numero 
console.log('=-=-=')
function soma(a = 0, b = 0){
    return a + b
}
console.log(soma(1))