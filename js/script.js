// Les panneaux dépliants sont des composants dynamiques qui permettent d’optimiser l’affichage d’un contenu dans un espace réduit grâce à un système de « plier/déplier ».

// aria-expanded="true" lorsque le panneau est déplié.
// aria-expanded="false" lorsque le panneau est plié.


// Element.setAttribute() Ajoute un nouvel attribut ou change la valeur d'un attribut existant pour l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés.

const toggleMenu = document.querySelector('.main-nav__toggler');
const menu = document.querySelector('.main-nav__list');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  console.log(open)
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
});


/* ------------------------------------------- */ 
/* ---------- IMAGE BOUTON ABOUT ------------- */
/* ------------------------------------------- */
//Affecte la nouvelle image lorsque la souris survole l'élément
function passaeDeLaSouris(element) {
  element.setAttribute('src', 'url(../img/Home/Group-3-white.svg)');
  }
  //Affecte l'image de départ lorsque la souris ne survole plus l'élément
  function departDeLaSouris(element) {
  element.setAttribute('src', 'url(../img/Home/Group 3.svg)');
  }
  


/* ------------------------------------------- */ 
/* ----------    FORMULAIRE      ------------- */
/* ------------------------------------------- */

/*
// Liste des Regex
const mdp  = new RegExp("^.{5,32}$","i"); break; // mot de passe entre 5 et 32 caractères  
const date = new RegExp("^[0-9]{2}/[0-9]{2}/[0-9]{4}$","i") ; break; // date au format 01/01/2000  
const ip   = new RegExp("^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$","i"); break; // adresse IPV4  
const tel  = new RegExp("^0[1-9]([-. ]?[0-9]{2}){4}$","i"); break; // numéro de téléphone français  
const cp   = new RegExp("^[0-9]{5}$","i"); break; // code postal  
const fichier = new RegExp("^.+\.[a-zA-Z]{2,5}$","i"); break; // fichiers à uploader
const nameValid = new RegExp("^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$");
const emailValid = new RegExp("^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}\\s*$","i");
const textValid = new RegExp("^([A-Za-z0-9]+\.[A-Za-z0-9]+(\r)?(\n)?)+$"); // pour des input type text ou des textarea
*/

const submitForm = document.getElementById('submitForm');


submitForm.addEventListener('click', (event) =>{ 

  // on récupère les input avec leurs id
  let name = document.getElementById('name'); 
  let email = document.getElementById('email');  
  let text = document.getElementById('text');

  // on instancie les regex
  const nameValid = new RegExp("^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$");
  const emailValid = new RegExp("^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}\\s*$","i");
  const textValid = new RegExp("^([A-Za-z0-9]+\.[A-Za-z0-9]+(\r)?(\n)?)+$");

  // on récupère les id pour afficher les messages d'erreurs
  let errorname = document.getElementById('errorname');
  let errormail = document.getElementById('errormail');
  let errortext = document.getElementById('errortext');

  
    name.addEventListener('input', () => {
      //Si le valeur === ""
      if (name.validity.valueMissing){
        event.preventDefault();
        errorname.textContent="Missing Name"; 
        name.style.border = "1px solid var(--brightRedSecondary)";
        console.log(submitForm);
      //Si le format de données est incorrect
      }else if (nameValid.test(name.value) == false){
        event.preventDefault();
        errorname.textContent = 'Please enter your name';
        name.style.border = "1px solid var(--brightRedSecondary)";
      }else {
        errorname.textContent = '';
        name.style.border = "1px solid transparent";
      }
    });

    email.addEventListener('input', () => {
      //Si le valeur === ""
      if (email.validity.valueMissing){
        event.preventDefault();
        errormail.textContent="Missing Email"; 
        email.style.border = "1px solid var(--brightRedSecondary)"; 
      //Si le format de données est incorrect
      }else if (emailValid.test(email.value) == false){
        event.preventDefault();
        errormail.textContent = 'Please enter your email';
        email.style.border = "1px solid var(--brightRedSecondary)";
      }else{
        errormail.textContent = '';
        email.style.border = "1px solid transparent";
      }
    });

    text.addEventListener('input', () => {
       //Si le valeur === ""
      if (text.validity.valueMissing){
        event.preventDefault();
        errortext.textContent="Missing Message"; 
        text.style.border = "1px solid var(--brightRedSecondary)";
      //Si le format de données est incorrect
      }else if (textValid.test(text.value) == false){
        event.preventDefault();
        errortext.textContent = 'Please enter a message in the correct format';
        text.style.border = "1px solid var(--brightRedSecondary)";
      }else{ 
        errortext.textContent = '';
        text.style.border = "1px solid transparent";
      }
    })

// 
     //Si le valeur === ""
    if (name.validity.valueMissing){
      event.preventDefault();
      errorname.textContent="Missing Name"; 
      name.style.border = "1px solid var(--brightRedSecondary)";
    //Si le format de données est incorrect
    }else if (nameValid.test(name.value) == false){
      event.preventDefault();
      errorname.textContent = 'Please enter your name';
      name.style.border = "1px solid var(--brightRedSecondary)";
    }else {
      console.log('BOOM Name');
      errorname.textContent = '';
      name.style.border = "1px solid transparent";
    }
     //Si le valeur === ""
    if (email.validity.valueMissing){
      event.preventDefault();
      errormail.textContent="Missing Email";  
      email.style.border = "1px solid var(--brightRedSecondary)";
    //Si le format de données est incorrect
    }else if (emailValid.test(email.value) == false){
      event.preventDefault();
      errormail.textContent = 'Please enter your email';
      email.style.border = "1px solid var(--brightRedSecondary)";
    }else{
      errormail.textContent = '';
      email.style.border = "1px solid transparent";
    }
      //Si le valeur === ""
      if (text.validity.valueMissing){
        event.preventDefault();
        errortext.textContent="Missing Message"; 
        text.style.border = "1px solid var(--brightRedSecondary)";
      //Si le format de données est incorrect
      }else if (textValid.test(text.value) == false){
        event.preventDefault();
        errortext.textContent = 'Please enter a message in the correct format';
        text.style.border = "1px solid var(--brightRedSecondary)";
      }else{ 
        errortext.textContent = '';
        text.style.border = "1px solid transparent";
      }
});




