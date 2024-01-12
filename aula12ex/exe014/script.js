// garante o carregamento da pagina e chama a função carregar()
window.onload = function(){
    carregar()
}
// muda img e cor de acorda com a horario
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        img.src = '../exe014/imagens/bom_dia.png'
        document.body.style.background = '#F3B700'
    }
    else if (hora <= 18) {
        img.src = '../exe014/imagens/boa_tarde.png'
        document.body.style.background = '#FF6201'
    }
    else {
       img.src = '../exe014/imagens/boa_noite.png'
       document.body.style.background = '#030027'
    }
}