window.onload = function(){
    adicionar();
}
window.onload = function(){
    finalizar();
}

var num = document.getElementById('num')
var lista = document.getElementById('lista')
var resultado = document.getElementById('res')
var numeros = []

function adicionar(){
    var n = Number(num.value)

    if ( n <= 0 || n > 100 ){
        alert('[ERRO] Valor Inválido! Digite novamente.')
    }
    else{
        var c = 0
        var num_existente = false
        for (c ; c < numeros.length ; c++ ){
            if (n == numeros[c]){
                num_existente = true
                break
            }
        }
        if(num_existente == true){
            alert('[ERRO] Valor já adicionado!')
        }
        else{
               var item = document.createElement('li') 
               numeros.push(n) // adiciona na ultima posicao
               item.innerHTML = `Número <strong>${n}</strong> adicionado!`
               item.style.fontSize = '95%'
               item.style.textAlign = 'center'
               lista.appendChild(item)
               num.value = '' 
               num.focus()// limpa o imput
               resultado.innerHTML = '' // limpa o resultado
               
            }
    }
}

function finalizar(){
    if ( numeros.length == 0){
        alert('[ERRO] Adicione valores para finalizar!')
    }
    else{
        var elementos_total = numeros.length
        var maior = numeros[0]
        var menor = numeros[0]
        var soma = 0
        var media = 0
        for (let n in numeros){
            soma += numeros[n]
            
            if (numeros[n] > maior)
                maior = numeros[n]
            if (numeros[n]< menor)
                menor = numeros[n]
        }

        media = soma / elementos_total
        resultado.style.textAlign = 'center'
        resultado.style.fontSize = '95%'
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>O <strong>total</strong> de números digitados foi ${elementos_total }.</p>`
        resultado.innerHTML += `<p>O <strong>maior</strong> número digitado foi ${maior }.</p>`
        resultado.innerHTML += `<p>O <strong>menor </strong>número digitado foi ${menor}.</p>`
        resultado.innerHTML += `<p>A <strong>soma</strong> dos números digitados foi ${soma}.</p>`
        resultado.innerHTML += `<p>A <strong>média</strong> dos números digitados foi ${media}.</p>`
    }

}
