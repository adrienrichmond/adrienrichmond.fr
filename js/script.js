//alerte l'utilisateur de la version expérimental du site
//alert("Site en version expérimental");//

//Ouvre et ferme le menu lors du clic sur l'icone 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
});

//Dark - Light Mode 
function toggleDarkMode() {
  var body = document.querySelector('body');
  var icon = document.getElementById("theme-icon");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
    // Changer l'image du logo pour le mode clair
    document.querySelector('.logo img').src = 'img/logoclair.png';
    // Mettre à jour le statut du mode dans le stockage local
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-mode");
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
    // Changer l'image du logo pour le mode sombre
    document.querySelector('.logo img').src = 'img/logodark.png';
    // Mettre à jour le statut du mode dans le stockage local
    localStorage.setItem("theme", "dark");
  }
}

//formulaire de contact 

    function submitForm(event) {
        var form = document.querySelector('.contact-form');
        var messageContainer = document.querySelector('#message-container');

        // Empêcher l'envoi du formulaire par défaut
        event.preventDefault();

        // Effectuez une requête AJAX pour envoyer les données du formulaire au serveur
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/contact.php', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Succès : Affichez le message de succès
                messageContainer.innerHTML = '<p>Votre message a été envoyé avec succès.</p>';
                // Effacez le formulaire après l'envoi si nécessaire
                form.reset();
            } else {
                // Erreur : Affichez un message d'erreur
                messageContainer.innerHTML = '<p>Une erreur s\'est produite lors de l\'envoi du message.</p>';
            }
        };
        xhr.send(formData);
        return false; // Empêcher la soumission normale du formulaire
    }