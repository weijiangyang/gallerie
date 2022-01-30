// pour verifier le fichier js est bien liee avec le fichier html

// alert('Bonjour');
/*
commenter sur plusieures lignes
*/ 
// commenter sur une seule ligne

// variable
// declarer une variable 
// affecter une valeur à une variable
var maBoite = 'salut'
/* nom de variable
 camelcase : salutMonAmie
 snakecase: salut_mon_amie
*/

// concaténation
// alert(maBoite+ ' ' +'est géniale')

// -----------------------------
// let & const 
// let uniquement pour un block definie
// -----------------------------
// console
console.log('bonjour', 'weijiang');
console.log('salut'+' '+'tout le monde');
console.log(typeof(12) );

// prompt permet d'afficher une forme de l'alert avec le champ de saisi
// var prenom = prompt('veuillez entrez votre prenom:');
// console.log(prenom);
// exercice1
// nommer les variable en anglais 
// var firstname1 = prompt('veuillez entrez un premier prenom:');
// var firstname2 = prompt('veuillez entrez un second prenom');
// var statut1 = prompt('veuillez entrez un premier etat du jour ');
// var statut2 = prompt('veuillez entrez un second etat du jour');
// var hour = prompt ('veuillez entrez un heure');
// var weekday = prompt('veullez entrez le jour ')
// console.log("✦"+firstname1,':Bonjour!');
// // utiliser ``pour mélanger string et variable 
// console.log(`✦${firstname2}: Bonjour ${firstname1}! Comment va tu?`);
// console.log(`✦${firstname1}: ${statut1},et toi?`);
// console.log(`✦${firstname2}: ${statut2}, je te remercie.`);
// console.log(`✦${firstname1}: Quelle heure est il?`);
// console.log(`✦${firstname2}: il est ${hour}.`);
// console.log(`✦${firstname1}: D'acc,merci.`);
// console.log(`✦${firstname2}: Où mange tu aujourd'hui?`);
// console.log(`✦${firstname1}: Je rentre chez moi comme les ${weekday}s`);
// console.log(`✦${firstname2}: D'acc.`);

// ----------------------------------------
// Exercice 1 : Bonjour
// ----------------------------------------

// Récupérer les informations nécessaires
// var firstName1 = prompt('Veuillez entrer un premier prénom');
// var firstName2 = prompt('Veuillez entrer un second prénom');
// var mood1 = prompt('Veuillez entrer un premier état du jour');
// var mood2 = prompt('Veuillez entrer un premier état du jour');

// // Afficher sous forme de discussion
// console.log('- ' + firstName1 + ' : Bonjour !');
// console.log('- ' + firstName2 + ' :  Bonjour ' + firstName1 + '! Comment vas-tu ?');

// LES CONDITIONS
// ----------------------------------------

// SYNTAXE
// IF = SI 
// ELSE = SINON
// ELSE IF = SINON SI

/*
let maVariable = 10;

if (maVariable == 4 || maVariable == 10) {
    console.log('Ma condition est respectée ! Youpiii ! ');
} else if (maVariable == 3) {
    console.log('Ma condition est respectée ! C\'est égal à 3');
} else {
    console.log('Ma condition n\'est pas respectée ! :(');
}
*/


// OPÉRATEURS DE COMPARAISON
// == : est égal à (en valeur)
// === : est égal à (en valeur et en type)
// != : est différent de (en valeur)
// !== : est différent de (en valeur et en type)
//  > : est supérieur (strictement)
//  < : est inférieur (strictement)
//  >= : est supérieur ou égal
//  <= : est inférieur ou égal


// OPÉRATEURS LOGIQUES
// && : ET

// récupérer l'âge
let age = prompt('veuillez entrez votre âge');

// décider si tu es majeur 
if(age>=21){
    console.log('vous avez la majorité internationnale.');
}else if (age>=18){
    console.log('vous êtes majeur! ');
}else{
    
    console.log('vous êtes mineur');
}

let number1 = 2;
let number2 = 20;
let number3 =30;
if(number1==number2&&number1==number3){
    console.log('trois variables sont identiques');
}else if(number1==number2||number1==number3||number2==number3) {
    console.log('deux des variables  sont de valeurs egales');
}else{
    console.log('les trois variables sont différentes');
}
var i = prompt('veuillez entrer un chiffre');
if(i<=10){
    for(let j=1; j<i;j++){
     console.log(`${j}->`);
 };
 console.log(`${i}->...`);
}else{
    console.log('vous êtes trop gourmand');
};


var number = prompt('veuillez entrez un chiffre');
var isPair = prompt('veuillez entrez 0 si vous voulez impair , sino entrez 1 ');

if(isPair!=0){
    for(let i=0;i<=number;i=i+2){
        console.log(i);
    }
}else{
    for(let i=1;i<=number;i=i+2){
        console.log(i);
    }
}

// let number=prompt('Veuillez inserer un chiffre')

// if (number>10){
//     console.log('Vous êtes trop gourmand')
// }
// else {
//     for( let monChiffre=0 ;monChiffre<=number; monChiffre++) {
//     console.log('-->'+ monChiffre)
// }
// }