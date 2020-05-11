<?php

$login = $_POST["loginxml"];
$senha = $_POST["senhaxml"];

$xml_string = file_get_contents("../LoginSenhaAdmin.xml");
$xml_objeto = simplexml_load_string($xml_string);


foreach ($xml_objeto->user as $user) {
    $loginxml = $user->login;
    $senhaxml = $user->senha;
    if ($login == $loginxml && password_verify($senha,$senhaxml)) {
        echo json_encode($login);
        break;
    }
}