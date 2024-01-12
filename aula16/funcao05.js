// n! = n x (n-1)!
function fatorial(n){
    if (n == 1){
        return 1
    }else{
        var fat = n * fatorial(n - 1)
        return fat
    }  
}
var res = fatorial(5)
console.log(res)