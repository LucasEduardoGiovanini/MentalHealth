<?php

$login = $_POST["loginxml"];
$id = $_POST["idxml"];

$xml = simplexml_load_file("../LoginSenha.xml");
$xmlAdmin = simplexml_load_file("../LoginSenhaAdmin.xml");


foreach ($xml->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml){
        foreach($user->favoritos->favorito as $fav){
            if($fav == $id){
                echo json_encode("Sucesso");
                break;
            }
        }
    break;
    }
}

foreach ($xmlAdmin->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml){
        foreach($user->favoritos->favorito as $fav){
            if($fav == $id){
                echo json_encode("Sucesso");
                break;
            }
        }
        break;
    }
}