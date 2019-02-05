/* Construisez une page html avec un bouton et un champ number. Le but est de trouver un nombre entre 0 et 100. A chaque réponse la page répond :
    plus
    moins
    correcte
Quand la réponse est trouvée, on obtient le nombre d'essais que l'on a fait.
*/
//  LORSQUE L'ON FAIT UNE FONCTION AVEC UN CHIFFRE RANDOM, IL VAUT MIEUX LA METTRE EN PLACE EN DERNIER / ON DEBUTE AVEC UNE VALEUR FIXE PUIS ON PLACE LE RANDOM
var count = 0; // valeur de base, A METTRE EN DEHORS DE LA FONCTION POUR NE PAS ETRE REINITIALISE A CHAQUE CLIC
//  Math.floor RENVOIE A L ENTIER INFERIEUR *101 / Math.random POUR AVOIR UN CHIFFRE ALEATOIRE / POUR AVOIR ENTIER A 2 CHIFFRES
var numberSearch = Math.floor(Math.random() * 101); // POUR POUVOIR ALLER DE 0 A 100 SINON 99
//ON EXECUTE LA FONCTION AU CLICK SUR LE BOUTON
     $('button').click(function(){
// On déclare la variable numberInput est égal à la valeur de l'input saisi, laquelle stocke la saisie animateur
       var numberInput = $('#number').val(); // .val : RIEN ENTRE ()--> ON RECUPERE - SINON IL MET UNE VALEUR
       count++;//on incrémente le nombre de coup de +1 le compteur
       console.log(numberSearch); // pour vérifier la valeur de retour
// SI LA SAISIE EST INFERIEURE AU NOMBRE DEMANDE, JE LE PRECISE A L'UTILISATEUR AVEC UNE BOITE DE DIALOGUE
       if( numberSearch < numberInput ){
         alert('Moins');
// SINON SI LE NOMBRE RECHERCHE EST SUPERIEUR AU NOMBRE SAISI
       }else if( numberSearch > numberInput ){
         alert('Plus');
// ALORS SI LE NOMBRE RECHERCHE EST EXACT AU NOMBRE SAISI
       }else if (numberSearch == numberInput){
         alert('Correct, en ' + count + ' coups joués!');
// Dans tous les autres cas, on demande un nombre
       }else {
         alert (' Veuillez entrer un nombre !');
       }
     });
