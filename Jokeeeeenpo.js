function solucao(joao, andre) {
    if (joao == andre){
            console.log ("EMPATE");
        }else {
            while (joao == "PEDRA") {
                if (andre == "TESOURA"){
                    console.log ("JOAO");
                } else if (andre == "PAPEL") {
                    console.log ("ANDRE");
                } else {
                    console.log("EMPATE");
                }
                break;
            }
            while (joao == "TESOURA"){
                if (andre == "PEDRA"){
                    console.log ("ANDRE");
                } else if (andre == "PAPEL") {
                    console.log ("JOAO");
                } else {
                    console.log("EMPATE");
                }
                break;
             }
            while (joao == "PAPEL"){
                if (andre == "TESOURA"){
                    console.log ("ANDRE");
                } else if (andre == "PEDRA"){
                    console.log ("JOAO");
                }
                break;
            }
        }
    
}