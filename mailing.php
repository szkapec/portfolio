<?php 
$naglowek="Wiadomosc z portfolio";

$adres = $_POST['email'];
$tytul= "To nowa wiadomość"
$tekst = "<html> <head></head>
<body>
Witam serdecznie na mojej skrzynce xD

</body>
</html>";

mail($adres,$tytul,$tekst,$naglowek); 
echo "Wiadomosc wysłana";
?>