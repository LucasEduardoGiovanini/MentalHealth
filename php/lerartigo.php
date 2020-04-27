<?php
$caminho = "../Conteudo/";
$diretorio = dir($caminho);
$resposta;


while ($arquivo = $diretorio->read()) {
    if ($arquivo != ".." && $arquivo != ".") {
        //echo $arquivo."<br>";
        $xml_string = file_get_contents($caminho . $arquivo);
        $xml_objeto = simplexml_load_string($xml_string);
        $conteudo = $xml_objeto->dadosconteudo->conteudo;
        $id = $xml_objeto->dadosconteudo->id;
        $assunto = $xml_objeto->dadosconteudo->assunto;
        $local_desenvolvimento = $xml_objeto->dadosconteudo->local_desenvolvimento;
        $autores = $xml_objeto->dadosconteudo->autores;
        $dataenvio = $xml_objeto->dadosconteudo->dataenvio;
        $tags = $xml_objeto->dadosconteudo->tags;
        $titulo = $xml_objeto->dadosconteudo->titulo;
        if($id == $_POST['id']){
        $resposta["titulo"] = strval($titulo);    // cria a matriz de retorno
        $resposta["conteudo"] = strval($conteudo);
        $resposta["autores"]  = strval($autores);
       
        }

    }
}
$diretorio->close();

echo json_encode($resposta);
