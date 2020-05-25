<?php

$login = $_POST["loginxml"];
$id = $_POST["idxml"];

$xml = simplexml_load_file("../LoginSenha.xml");
$xmlAdmin = simplexml_load_file("../LoginSenhaAdmin.xml");

$u = 0;
foreach ($xml->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml){
        $c=0;
        foreach($user->favoritos->favorito as $fav){
            if($fav == $id){
                $dom=dom_import_simplexml($xml->user[$u]->favoritos->favorito[$c]);
                $dom->parentNode->removeChild($dom);
                $xml->asXml("../LoginSenha.xml");
                echo json_encode("Sucesso");
                break;
            }
            $c = $c+1;
        }
        break;
    }
    $u = $u+1;
}

$u = 0;
foreach ($xmlAdmin->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml){
        $c=0;
        foreach($user->favoritos->favorito as $fav){
            if($fav == $id){
                $dom=dom_import_simplexml($xmlAdmin->user[$u]->favoritos->favorito[$c]);
                $dom->parentNode->removeChild($dom);
                $xmlAdmin->asXml("../LoginSenhaAdmin.xml");
                echo json_encode("Sucesso");
                break;
            }
            $c = $c+1;
        }
        break;
    }
    $u = $u+1;
}