// PSEUDO-CODE:(language naturel)
// les differentes etapes de programme:
// l'etape 1:
// quand utlisateur click, les images changent
// l'etape 2
// ça change d'image par la suivante.
// les images doivent rester en ordre.

// ainsi de suite...(jusqu'au l'image 5)
// 
// l'etate3(probleme):
// lorsqu'on arrive à image 5 , il faut revenir à la première image


// console.log()

//1.récupérer les elements:
//  image
// container

let container = document.querySelector('.container');
// console.log(container);
let image = document.querySelector('.container img');
// console.log(image);

//2. manipuler les elements:
// addEventListener -> click
let i = 1;


image.addEventListener('click',imgChange);

function imgChange(){
    if(i==5){
        i=1;
    }else{
        i++;
    }
    // 更改image的 SRC 
    
    image.src = `images/image_${i}.jpg`
    // setAttribute est utilsé pour les attributes inexistant avant
}