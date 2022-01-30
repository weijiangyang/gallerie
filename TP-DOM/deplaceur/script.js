// recuperer l'element box

let box = document.querySelector('.box');
// creer un counteur pour le mouse scroll
let counter=1
// ajouter un event Ecouteur pour le window
if(counter>=1){
   window.addEventListener('mousewheel',function(e){
      // quand le souris scroll en haute ,en quand le souris scroll en bas
      if(e.wheelDelta>=0){
         counter++;}else{
            counter--
         }
         // creer un variable de CSS '--distanceX' en utilsant le variable de JS 'counter'
         document.documentElement.style.setProperty('--distanceX', counter)


         box.style.transform = 'translateX(calc(var(--spacing)*var(--distanceX)))';
         
    
   
})


}

   
   