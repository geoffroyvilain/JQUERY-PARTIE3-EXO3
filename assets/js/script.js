/* Construisez une page html avec un bouton et un champ number. Le but est de trouver un nombre entre 0 et 100. A chaque réponse la page répond :
    plus
    moins
    correcte
Quand la réponse est trouvée, on obtient le nombre d'essais que l'on a fait.
*/
var count = 0; // valeur de base
var numberSearch = Math.floor(Math.random() * 101);
//ON EXECUTE LA FONCTION AU CLICK SUR LE BOUTON
     $('button').click(function(){
// On déclare la variable numberInput est égal à la valeur de l'input saisi
       var numberInput = $('#number').val();
       count++;
       console.log(numberSearch); // pour vérifier la valeur de retour
// SI LE NOMBRE RECHERCHE EST INFERIEUR AU NOMBRE SAISI
       if( numberSearch < numberInput ){
         alert('Moins');
// SINON SI LE NOMBRE RECHERCHE EST SUPERIEUR AU NOMBRE SAISI
       }else if( numberSearch > numberInput ){
         alert('Plus');
// ALORS SI LE NOMBRE RECHERCHE EST EXACT AU NOMBRE SAISI
       }else if (numberSearch == numberInput){
         alert('Correcte, en ' + count + ' coups joués!');
       }
     });
