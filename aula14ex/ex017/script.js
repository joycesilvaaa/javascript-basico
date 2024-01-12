window.onload = function(){
    tabuada()
}
function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tabuada')
    if (num.value.length == 0 ){
       alert('[ERRO] Por favor, digite um número!')
    }
    else{
        tab.innerHTML = ''
        let n = Number(num.value) 
        c = 0
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            // tab.value = `tab${c}` (para saber qual item foi selecionado)
            c ++
        }
    }
}