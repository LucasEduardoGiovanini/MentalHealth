<?php
$id = $_POST["id"];


if(!empty($id)){
    if(file_exists("../conteudo/" . $id . ".xml")){
        unlink("../conteudo/" . $id . ".xml");
        echo json_encode("sucesso");
    }
}