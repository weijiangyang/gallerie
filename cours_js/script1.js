let title = document.getElementById('title');
let subTitle = document. getElementsByTagName('h2');
let paragraph = document.getElementsByClassName('paragraph');
let body = document.getElementsByTagName('body');
console.log(title.innerHTML);
console.log(title.outerHTML);
console.log(subTitle);
console.log(paragraph);

title.classList.add('grand');
title.style.font='200px';
subTitle[0].style.fontFamily='Geneva'
// -----------------------------------------------------------
// paragraph[0].innerHTML = 'Lorem ipsum <span> salut ça va </span>';
// .classList.add('title'); 
// .setAttribute("href", "http://chrisb.fr");
// .style.font = "nouvelle propriete";
// .style.color = "red";
// .style.backgroundColor = 'red'
// .childNode
// .parentNode
// .nextSibling
// .previousSibling
// document.createElement(element)
// document.removeChild(element)
// document.appendChild(element)
// document.replaceChild(element)
document.body.onload = addElement;

function addElement () {
  // crée un nouvel élément div
  var newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  var newContent = document.createTextNode('Hi there and greetings!');
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  
  document.body.insertBefore(newDiv, title);
}
// Remplacer le noeud existant sp2 par le nouvel élément span sp1
// body.replaceChild(newDiv, subTitle);
