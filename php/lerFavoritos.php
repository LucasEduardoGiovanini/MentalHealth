<?php

$login = $_POST["loginxml"];

$xml = simplexml_load_file("../LoginSenha.xml");
$xmlAdmin = simplexml_load_file("../LoginSenhaAdmin.xml");

$ids_fav = array();
$quant = 0;

foreach ($xml->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml){
        foreach($user->favoritos->favorito as $fav){
            array_push($ids_fav,$fav);
            $quant = $quant + 1;
        }
    break;
    }
}

foreach ($xmlAdmin->user as $user) {
    $loginxml = $user->login;
    if ($login == $loginxml){
        foreach($user->favoritos->favorito as $fav){
            array_push($ids_fav,$fav);
            $quant = $quant + 1;
        }
        break;
    }
}



$caminho = "../conteudo/";
$diretorio = dir($caminho);

$resposta;
$resposta[0]["qnt"] = $quant;
$contador = 1;

while ($arquivo = $diretorio->read()) {
    if ($arquivo != ".." && $arquivo != ".") {
        //echo $arquivo."<br>";
        $xml_string = file_get_contents($caminho . $arquivo);
        $xml_objeto = simplexml_load_string($xml_string);

        $id = $xml_objeto->dadosconteudo->id;
        $intid = intval($id);

        if(in_array($intid,$ids_fav)){
            $autores = $xml_objeto->dadosconteudo->autores;
            $descricao = $xml_objeto->dadosconteudo->descricao;
            $titulo = $xml_objeto->dadosconteudo->titulo;
            $tags = $xml_objeto->dadosconteudo->tags;

            $resposta[$contador]["titulo"] = strval($titulo);    // cria a matriz de retorno
            $resposta[$contador]["id"]  = strval($id);
            $resposta[$contador]["autores"]  = strval($autores);
            $resposta[$contador]["descricao"]  = strval($descricao);
            $resposta[$contador]["tags"]  = strval($tags);
            $contador++;
        }
    }
}
$diretorio->close();

echo json_encode($resposta);