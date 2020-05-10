<?php

$login = $_POST["loginxml"];
$senha = $_POST["senhaxml"];

$xml = simplexml_load_file("../LoginSenha.xml");

$var = TRUE;

if (empty($login) || empty($senha)){
    $var = FALSE;
}

foreach ($xml->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml) {
        $var = FALSE;
        break;
    }
}

if($var){
    $account = $xml->addChild("user");

    $account->addChild("login", $login);
    $account->addChild("senha", $senha);
    
    $xml->asXML("../LoginSenha.xml");
    
    echo json_encode($login);
}