function solucao(produtos) {
    var total = 0;
    var soma = 0;
    for (var item of produtos){
        soma += Number(item.preco);

        if (item.preco >= 10000){
            total += Number(item.preco);
        }
    }

    if(soma != 0){
        var percent = total/soma;
    }
    
    let exibir = {totalTop: total, percentual: percent};  
    console.log(exibir);
}
