<?php
$caminho = "../conteudo/";
$diretorio = dir($caminho);

$resposta;

while ($arquivo = $diretorio->read()) {
    if ($arquivo != ".." && $arquivo != ".") {
        $xml_string = file_get_contents($caminho . $arquivo);
        $xml_objeto = simplexml_load_string($xml_string);

        $id = $xml_objeto->dadosconteudo->id;
        $descricao = $xml_objeto->dadosconteudo->descricao;

        if($id == $_POST['id']){
            $resposta = strval($descricao);
        break;
        }
    }
}

$diretorio->close();

echo json_encode($resposta);