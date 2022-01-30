 let monNumber = prompt('de quel nombre veux-tu calculer la factorielle');
 function factorielle(number){
     let result=1;
     for(let i=1; i<=number;i++){
         result*=i
     }
     console.log(`le resultat est : ${result}`);
 }

 factorielle(monNumber);