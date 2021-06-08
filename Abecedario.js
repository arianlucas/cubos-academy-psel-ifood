function solucao(letra, palavras) {
    let erro = 0;
    
	for (let primeira of palavras) {
        if (primeira[0] != letra){
            erro++
        }
    }
    console.log(erro);
    
}