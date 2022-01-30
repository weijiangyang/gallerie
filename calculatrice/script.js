// PSEUDO-CODE:
// Les actions de l'utilisateur :

// L'utilisateur sélectionne grâce au HTML l'opérateur de calcul (+, -, *, /)

// L'utilisateur saisi grâce au HTML les deux valeurs qu'il lui permet de réaliser un calcul

// L'utilisateur clique sur "Calculer" et permet de lancer un script

// Ce que le script JS doit faire :

// - Écouter le clique sur le formulare (btn submit)

//       - Il va falloir utiliser le fonction "preventDefault()"

// - Lorsque la fonction de l'écouteur d'évènement est lancée

//       - Récuperer les 2 valeurs dans les inputs

//       - Récupérer l'opérateur dans le select

// - En fonction de l'opérateur, réaliser une addition si l'opérateur choisi est le "+"

// - Réaliser une soustraction si l'opérateur choisi est le "-"

// - etc...

// Pour finir, une fois le resultat du calcul en main, il suffit de l'afficher grâce à une alerte "alert(`${nb1}${operator}${nb2} = ${result}`)"
     
// récupérer l'element bouton 'calculer'
let button = document.getElementById('calculer');
button.addEventListener('click',function(e){
    // preventDefault();

    // récupérer les deux numbres saisis
    let numberLeft =Number(document.getElementById('numberLeft').value) ;
    let numberRight =Number(document.getElementById('numberRight').value) ;


    // récupérer l'operator choisi
    let mySelect = document.getElementById('select');
    let index = mySelect.selectedIndex;
    let operator = mySelect.options[index].text


    // faire la calculation et afficher le resultat 
    if(operator == '+'){
        let result = numberLeft + numberRight;
        alert(`${numberLeft}+${numberRight}=${result}`)
    }else if(operator == '-'){
        let result = numberLeft - numberRight;
        alert(`${numberLeft}-${numberRight}=${result}`)
    }else if(operator == '*'){
        let result = numberLeft*numberRight;
        alert(`${numberLeft}*${numberRight}=${result}`)
    }else{
        let result = numberLeft/numberRight;
        alert(`${numberLeft}/${numberRight}=${result}`)

    }


})

    // récupérer les deux elements bouton pour manipuler le style de display de la calculatrice
let btnA = document.getElementById('btnA');
let btnB = document.getElementById('btnB');
    // utiliser addEventlistener 'click' pour faire la dispparaition et l4apparaition
let calculatrice = document.getElementById('calculatrice')
btnA.addEventListener('click',function(){
    calculatrice.style.display = 'none';

});

  
btnB.addEventListener('click',function(){
    calculatrice.style.display = 'block';

});

// récupérer les elements input de chiffres 
let numberLeft = document.getElementById('numberLeft');
let numberRight = document.getElementById('numberRight');

// utiliser addEventlistener 'mouserover' et 'mouseout' pour faire reagir de l'affichage avec le movement de la souris
numberLeft.addEventListener('mouseover',function(){
    document.getElementById('affiche').innerHTML = 'saisir un chiffre';
  

})
  numberLeft.addEventListener('mouseout',function(){
    document.getElementById('affiche').innerHTML = ' '
})

numberRight.addEventListener('mouseover',function(){
    document.getElementById('affiche').innerHTML = 'saisir un chiffre';
  

});

  numberRight.addEventListener('mouseout',function(){
    document.getElementById('affiche').innerHTML = ' '
});

let operator = document.getElementById('select');
operator.addEventListener('mouseover',function(){
    document.getElementById('affiche').innerHTML = 'selectionner un operator : + - * /'
});

operator.addEventListener('mouseout',function(){
    document.getElementById('affiche').innerHTML = '';
})







