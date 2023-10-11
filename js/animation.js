// Animation bouton Découvrir & Contact

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez le lien "Découvrir"
  var discoverLink = document.querySelector('a[href="#section2"]');

  // Sélectionnez le lien "Contact"
  var contactLink = document.querySelector('a[href="#section3"]');

  // Ajoutez un gestionnaire d'événement pour le clic sur le lien "Découvrir"
  discoverLink.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement de lien par défaut

    // Obtenez l'élément cible (section 2)
    var targetSection = document.querySelector("#section2");

    // Obtenez la hauteur de la fenêtre du navigateur
    var windowHeight = window.innerHeight;

    // Obtenez la hauteur de la section cible
    var sectionHeight = targetSection.offsetHeight;

    // Calculez le décalage pour centrer la section cible dans la vue du navigateur
    var offset = (windowHeight - sectionHeight) / 2;

    // Effectuez un défilement fluide jusqu'à la section cible avec le décalage
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
  });

  // Ajoutez un gestionnaire d'événement pour le clic sur le lien "Contact"
  contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement de lien par défaut

    // Obtenez l'élément cible (section 3)
    var targetSection = document.querySelector("#section3");

    // Obtenez la hauteur de la fenêtre du navigateur
    var windowHeight = window.innerHeight;

    // Obtenez la hauteur de la section cible
    var sectionHeight = targetSection.offsetHeight;

    // Calculez le décalage pour centrer la section cible dans la vue du navigateur
    var offset = (windowHeight - sectionHeight) / 2;

    // Effectuez un défilement fluide jusqu'à la section cible avec le décalage
    targetSection.scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
  });
});