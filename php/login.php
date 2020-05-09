<?php

$login = $_POST["loginxml"];
$senha = $_POST["senhaxml"];

$xml_string = file_get_contents("../LoginSenha.xml");
$xml_objeto = simplexml_load_string($xml_string);


foreach ($xml_objeto->user as $user) {
    $loginxml = $user->login;
    $senhaxml = $user->senha;
    if ($login == $loginxml && $senha == $senhaxml) {
        echo json_encode("permitido!");
        break;
    }
}