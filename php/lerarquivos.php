<?php
$caminho = "../Conteudo/";
$diretorio = dir($caminho);

$qnt_emails = count(glob($caminho . "*"));  // 
$resposta;
$resposta[0]["qnt"] = $qnt_conteudos;
$contador = 1;


while ($arquivo = $diretorio->read()) {
    if ($arquivo != ".." && $arquivo != ".") {
        //echo $arquivo."<br>";
        $xml_string = file_get_contents($caminho . $arquivo);
        $xml_objeto = simplexml_load_string($xml_string);
        $conteudo = $xml_objeto->dadosconteudo->conteudo;
        $assunto = $xml_objeto->dadosconteudo->assunto;
        $dataenvio = $xml_objeto->dadosconteudo->dataenvio;
        $titulo = $xml_objeto->dadosconteudo->titulo;

        $resposta[$contador]["titulo"] = strval($titulo);    // cria a matriz de retorno
        $resposta[$contador]["conteudo"] = strval($conteudo);
        $resposta[$contador]["assunto"]  = strval($assunto);
        $resposta[$contador]["dataenvio"]  = strval($dataenvio);
        $contador++;
    }
}
$diretorio->close();

echo json_encode($resposta);
