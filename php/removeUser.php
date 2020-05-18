<?php

$login = $_POST["loginxml"];

$doc = new DOMDocument; 
$doc->load('../LoginSenha.xml');

$thedocument = $doc->documentElement;

$doc = simplexml_load_file("../LoginSenha.xml");

$c=0;
foreach ($doc->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml){
        $dom=dom_import_simplexml($doc->user[$c]);
        echo $doc->user[$c];
        $dom->parentNode->removeChild($dom);
        $doc->asXml("../LoginSenha.xml");
        echo json_encode("Sucesso");
        break;
    }
    $c = $c+1;
}

