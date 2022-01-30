var nombreEtages = prompt("Salut, bienvenu dans ma super pyramidw! Combien d/'etages veux-tu?/'");
function pyramide(etages){
    // methode 1
    // var symbol=" ";
    
    // for(let i=1;i<=etages;i++){
    //     // calculer les espace de  vide pour chaque ligne
    //     let vide =' ';
    //    for(let j=etages-i;j>0;j--){
    //        vide = vide +' ';
    //    }
    // //   calculer les numbre de "#" pour chaque ligne
    //    symbol =  symbol + "#" ;
    // // concatener les "#" et les "vide" dans une ligne
    //    console.log(vide + symbol);
    // }

    // };
    
    // methode 2 (utiliser la function repeat())
    let symbol = 1;
   
    for(let i=1; i<= etages;i++){
        console.log(' '.repeat(etages-symbol)+'#'.repeat(symbol));
       
        symbol++
    }
}

pyramide(nombreEtages)

