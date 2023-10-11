<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $destinataire = "contact@adrienrichmond.fr";
    $sujet = "Nouveau message de $nom";

    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message:\n$message";

    // En-têtes du courriel
    $headers = "From: $nom <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi du courriel
    if (mail($destinataire, $sujet, $contenu, $headers)) {
        echo "Votre message a été envoyé avec succès. Je vous répondrais dès que possible.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>
