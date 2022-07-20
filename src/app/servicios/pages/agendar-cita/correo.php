<?php
    $destino= "segurosyfianzaspm@gmail.com"
    $nombre = $_POST["nombre"];
    $nombre = $_POST["email"];
    $nombre = $_POST["numero"];
    $nombre = $_POST["fecha"];
    $contenido = "Nombre: " . $nombre . "\nEmail: " .$email . "\nTelefono: " .$numero . "\nFecha: " .$fecha;
    mail($destino,"Contacto", $contenido);
    header("Location:mensajes.html")
?>