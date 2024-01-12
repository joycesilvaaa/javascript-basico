let valores = [8,1,7,4,2,9] // a primeira posição começa com 0 e não com 1
for (let c = 0; c < valores.length ; c ++){
    console.log(`A posição ${c} tem o valor de ${valores[c]}.`)
}
// para cada n em valores
for (let n in valores ){
    console.log(`A posição ${n} tem o valor de ${valores[n]} (Forma Simplificada)`)
}
