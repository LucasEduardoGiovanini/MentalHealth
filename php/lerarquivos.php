<?php
$caminho = "../conteudo/";
$diretorio = dir($caminho);

$qnt_conteudos = count(glob($caminho . "*"));  // 
$resposta;
$resposta[0]["qnt"] = $qnt_conteudos;
$contador = 1;


while ($arquivo = $diretorio->read()) {
    if ($arquivo != ".." && $arquivo != ".") {
        //echo $arquivo."<br>";
        $xml_string = file_get_contents($caminho . $arquivo);
        $xml_objeto = simplexml_load_string($xml_string);

        $id = $xml_objeto->dadosconteudo->id;
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
$diretorio->close();

echo json_encode($resposta);