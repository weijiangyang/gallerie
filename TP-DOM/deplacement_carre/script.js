// recuperer l'element box
let box = document.getElementById('box');
// recuperer l'element bouton
let btn = document.getElementById('btnBouge');
// mettre un counteur pour compter le nombre des clicks
let count =1;
// ajouter un event ecouteur 'click' sur le bouton
   btn.addEventListener('click',function(){
      // if(count==1){
      //    box.style.transform="translate(100px,0px) ";
      //    count++;
      // }else if (count ==2){
      //    box.style.transform="translate(100px,-100px) ";
      //    count++
      // }else if (count == 3){
      //    box.style.transform="translate(0px,-100px) ";
      //    count++;

      // }else {
      //    box.style.transform="translate(0px,0px) ";
      //    count = 1
      // }
      switch(count){
         case 1:
            box.style.transform="translate(100px,0px) ";
            count++;
            break;
         case 2:
            box.style.transform="translate(100px,-100px) ";
            count++;
            break;
         case 3:
            box.style.transform="translate(0px,-100px) ";
            count++;
            break;
         default:
            box.style.transform="translate(0px,0px) ";
            count=1;


      }
   
  })
  






 