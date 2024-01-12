window.onload = function(){
    verificar()
}
function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var ano_user = document.getElementById('idade')
    var resultado = document.getElementById('res')

    if(ano_user.value.length == 0 || Number(ano_user.value) > ano){

        alert('[ERRO] Verefique os dados e tente novamente!')
        

    }else{

        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(ano_user.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.width = '200px'
        var genero = ''
        var tipo = ''

        if (sexo[0].checked ){
            genero = 'masculino'

            if (idade >= 0 && idade <=3){
                tipo = 'bebê'
                img.setAttribute('src', '../exe015/imagens/bb_menino.png')                
            }
            else if (idade < 12){
                tipo = 'criança'
                img.setAttribute('src', '../exe015/imagens/crianca_menino.png')
                
            }
            else if (idade <= 21){
                tipo = 'adolecente'
                img.setAttribute('src', '../exe015/imagens/adol_menino.png')
            }
            else if (idade < 65 ){
                tipo = 'adulto'
                img.setAttribute('src', '../exe015/imagens/homem.png')
                
            } else{
                tipo = 'idoso'
                img.setAttribute('src', '../exe015/imagens/idoso.png')
                
            }
        } 
        else if (sexo [1].checked){
            
            genero = 'feminino'
        
            if (idade >= 0 && idade <=3){
                tipo = 'bebê'
                img.setAttribute('src', '../exe015/imagens/bb_menina.png')
                
            }
            else if (idade < 12){
                tipo = 'criança'
                img.setAttribute('src', '../exe015/imagens/crianca_menina.png')
                
            }
            else if (idade <= 21){
                tipo = 'adolecente'
                img.setAttribute('src', '../exe015/imagens/adol_menina.png')
                
            }
            else if (idade < 65 ){
                tipo = 'adulto'
                img.setAttribute('src', '../exe015/imagens/mulher.png')
                
            } else{
                tipo = 'idosa'
                img.setAttribute('src', '../exe015/imagens/idosa.png')
                
            }

        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos um ${tipo} do gênero ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}