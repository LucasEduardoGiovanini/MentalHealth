<?php

$login = $_POST["loginxml"];
$id = $_POST["idxml"];

$xml = simplexml_load_file("../LoginSenha.xml");
$xmlAdmin = simplexml_load_file("../LoginSenhaAdmin.xml");

foreach ($xml->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml) {
        $user->favoritos->addChild("favorito", $id);
        $xml->asXML("../LoginSenha.xml");
        echo json_encode("sucesso");
        break;
    }
   
}

foreach ($xmlAdmin->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml){
        $user->favoritos->addChild("favorito", $id);
        $xmlAdmin->asXML("../LoginSenhaAdmin.xml");
        echo json_encode("sucesso");
        break;
    }
}