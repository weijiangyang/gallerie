//  Modification n°1

// Écris une fonction `changeTitles()` qui va :

// 1. Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris avec Chris"
// 2. Pointer vers le sous-titre ("Something short and leading about…") et le changer en "Dans un cadre de formation intensive, Chris m’aide à développer mes compétences"

// Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en l'appelant en bas avec un `changeTitles();`. Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.
function changerTitle(){
    let title = document.querySelector('h1');
    title.innerHTML = 'Ce que je fais avec Chris';
    let sousTitle = document.querySelectorAll('section div p')[0];
    sousTitle.innerHTML = "Dans un cadre de formation intensive, Chris m’aide à développer mes compétences"
};

changerTitle();

// Modification n°2

// Ecris une fonction `changeCallToActions()` qui va:

// 1. Changer le texte du bouton "Main call to action" en "OK je veux tester !"
// 2. Ajouter l'URL (un `href`) vers laquelle le bouton "Main call to action" va pointer : "https://chrisb.fr"
// 3. Changer le texte du bouton "Secondary action" en "Non Merci"
// 4. Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"
function changeCallToActions(){
    let monButton1 = document.querySelectorAll('section div p')[1].querySelectorAll('a')[0];
    monButton1.innerHTML = "OK je veux tester !";
    let monButton2 =document.querySelectorAll('section div p')[1].querySelectorAll('a')[1];
    monButton1.setAttribute('href','https://chrisb.fr');
    monButton2.innerHTML = "Non Merci";
    monButton2.setAttribute('href','https://www.pole-emploi.fr/accueil/');
};

changeCallToActions();


// Modification n°3

// Écris une fonction `changeLogoName()` qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :

// 1. Change "Album" par "Chris est le meilleur formateur" 😀 ;
// 2. Change la taille du texte pour le passer en `2em`.
function changeLogoName(){
    let strongLogo = document.querySelector('header strong');
    strongLogo.innerHTML = 'Chris est le meilleur formateur';
    strongLogo.style.fontSize = '2em';
};

changeLogoName();
//  Modification n°4

// Écris une fonction `populateImages()` qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :

// ```
// let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
// ```

// Une petite boucle des familles va être utile ici. (Bon courage 😛)


let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "images/1.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
let cards = document.querySelectorAll('.card img');
for(let i=0;i<cards.length;i++){
    cards[i].setAttribute('src',imagesArray[i])};

    
