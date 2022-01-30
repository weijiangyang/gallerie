// PSEUDO-CODE:
// d'abord il faut recuperen les deux elements input pour saisir le chiffre et pour copier le chiffre
// et puis il faut ajouter un event ecouteur "input" pour afficher automatiquement dans l'element pour copier. 


// recuperer les deux elements pour input
let inputImport = document.getElementById('import');
let inputExport = document.getElementById('export');

//  add eventEcouteur 'click' sur l'element input 'import'
inputImport.addEventListener('input',function(e){
    inputExport.setAttribute('value',e.target.value)
})


