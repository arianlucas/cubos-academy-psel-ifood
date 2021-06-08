function solucao(precos) {
    let menor = precos[0];
    let soma = 0;
    
    if (precos.length >= 5){
        for (let i = 1; i <= precos.length-1; i++){
            if (menor > precos[i]){
                menor = precos [i];
            }
        }
        for (a = 0; a <= precos.length-1; a++){
            soma += precos[a]
        }
        let total = soma - menor
        console.log (total);
        
    } else {
            for (a = 0; a <= precos.length-1; a++){
                soma += precos[a]
            }
            console.log (soma);
        }
    
}