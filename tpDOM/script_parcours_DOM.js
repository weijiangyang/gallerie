//  Question 1 :

// Combien y a-t-il d'éléments `<p>` présents dans la page HTML ? Imprime-le résultat dans la console.

let paragraphes = document.getElementsByTagName('p');

console.log('Les nombres de paragraphes :',paragraphes.length);

// Question 2 :

// Quel est le contenu texte de l'élément portant l'id `coucou` ? Imprime-le dans la console.

let coucou = document.getElementById('coucou');
console.log(coucou.innerHTML);

// Question 3 :

// Quelle est l'URL vers laquelle pointe le 3ème élément `<a>` de la page HTML ? Imprime-la dans la console.
let mesLiens = document.getElementsByTagName('a');
let URL3 = mesLiens[2].href;
console.log(URL3);

//  Question 4 :

// Combien d'éléments portent la classe `compte-moi` ? Imprime le résultat dans la console.

let compteMoi = document.getElementsByClassName('compte-moi');
console.log("nombre des elements qui portent la class 'compte-moi':", compteMoi.length);

// Question 5 :

// Combien d'éléments `<li>` portent la classe `compte-moi` ? Imprime le résultat dans la console.

let liCompteMoi = document.querySelectorAll('li.compte-moi');
console.log("nombre des li qui portent la class 'compte-moi':",liCompteMoi.length);

//  Question 7 :

// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

// La page contient un seul élément `<div>`. Celui-ci contient 2 éléments "unordered list" ou `<ul>`. Dans le second `<ul>`, le premier élément de la liste (tag `<li>`) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
let liCashe = document.querySelectorAll('div ul')[1].querySelector('li');
console.log(liCashe);