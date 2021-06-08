function solucao(ano) {
    let anoBaseCopa = 2022;
    let anoBaseJogos = 2024
    
    let copa = ano - anoBaseCopa;
    let jogos = ano - anoBaseJogos;
    
	if ( copa % 4 == 0 ){
        console.log ("COPA");
    } else if ( jogos % 4 == 0) {
        console.log ("JOGOS");
    } else {
        console.log ("MEH")
    }
}
