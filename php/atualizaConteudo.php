<?php
$id = $_POST["id"];
$autores = $_POST["autores"];
$titulo = $_POST["Atitulo"];
$descricao = $_POST["descricao"];
$dataenvio = $_POST["dataenvio"];
$corpo = $_POST["corpo"];
$referencias = $_POST["referencias"];
$tags = $_POST["tags"];


$xml = new DOMDocument("1.0");
$conteudo_xml = $xml->createElement("conteudo");
$dadosconteudo_xml = $xml->createElement("dadosconteudo");
$id_xml = $xml->createElement("id", $id);
$autores_xml = $xml->createElement("autores", $autores);
$titulo_xml = $xml->createElement("titulo", $titulo);
$descricao_xml = $xml->createElement("descricao", $descricao);
$dataenvio_xml = $xml->createElement("dataenvio", $dataenvio);
$corpo_xml = $xml->createElement("corpo", $corpo);
$referencias_xml = $xml->createElement("referencias", $referencias);
$tags_xml = $xml->createElement("tags", $tags);

$variavel = TRUE;   

if(empty($id)|| empty($dataenvio) || empty($autores) || empty($titulo) || empty($descricao) || empty($corpo) || empty($referencias) || empty($tags)){
    $variavel = FALSE;
}


if($variavel){
    $dadosconteudo_xml->appendChild($id_xml);
    $dadosconteudo_xml->appendChild($autores_xml);
    $dadosconteudo_xml->appendChild($titulo_xml);
    $dadosconteudo_xml->appendChild($descricao_xml);
    $dadosconteudo_xml->appendChild($dataenvio_xml);
    $dadosconteudo_xml->appendChild($corpo_xml);
    $dadosconteudo_xml->appendChild($referencias_xml);
    $dadosconteudo_xml->appendChild($tags_xml);

    $conteudo_xml->appendChild($dadosconteudo_xml);
    $xml->appendChild($conteudo_xml);

    $xml->save("../conteudo/" . $id . ".xml");

    echo json_encode("sucesso");
}
else{
    echo "erro";
}