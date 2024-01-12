
// sem else if
var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não é Permitido Votar!')
}
else{
    if (idade < 18 || idade > 65){
        console.log('Voto Opcional!')
    }
    else{
        console.log('Voto Obrigatorio!')
    }
}
// Ultizando o comando else if 
var dia = 15
console.log(`Hoje é dia ${dia}.`)
if (dia == 25) {
    console.log('Feliz Natal!!!')
}
else if (dia == 0o1 || dia == 1){
    console.log('Feliz Ano Novo!!!')
}
else {
    console.log('Boas Festas!')
}
