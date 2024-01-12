// fatorial de 5 = 5x4x3x2x1 = 120
function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c --){
        fat = fat * c
    }
    return `O fatorial de ${n} é ${fat}.` 
}
var res = fatorial(5)
console.log(res)