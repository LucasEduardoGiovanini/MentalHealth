<?php

$login = $_POST["loginxml"];
$senha = password_hash($_POST["senhaxml"],PASSWORD_DEFAULT);

$xml = simplexml_load_file("../LoginSenhaAdmin.xml");
$xml2 = simplexml_load_file("../LoginSenha.xml");
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

foreach ($xml2->user as $user) {
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
    
    $xml->asXML("../LoginSenhaAdmin.xml");
    
    echo json_encode($login);
}