window.onload = function(){
    calcular()
}
function calcular (){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){

        alert('[ERRO] Valor invalido! Tente novamente.')

    }else{
        resultado.style.textAlign = 'center'
        resultado.innerHTML = 'Contando : <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0 ){
            alert('Passo inválido! Considerando PASSO = 1.')
            p = 1
        }
        if (i < f){
           for (i ; i <= f ; i += p){
            resultado.innerHTML += ` ${i} &#127793; `
        }
        resultado.innerHTML += '&#127794' 
        }else{
            for (i ; i >= f ; i -= p){
                resultado.innerHTML += ` ${i} &#127793; `
            }
            resultado.innerHTML += '&#127794' 
        }
        
    }
}