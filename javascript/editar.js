$(document).ready(function () {
    $("#edit_artigo").click(function () {

        $titulo = $("#titulo_artigo").text();
        $corpo = $("#corpo_artigo").text();
        $autor = $("#autor_artigo").text();
        $data = $("#data_artigo").text();
        $id = $("#id_artigo").text().replace('Id:','');
        $tags = $("#tags_artigo").text();
        $ref = $("#ref_artigo").text();
            
        $var = $data.split("-");
        $data = $var[2]+ "-" + $var[1] + "-" + $var[0]; 

        $("#addArtigo").click();

        setTimeout(function (){
            $("#id").val($id);
            $("#dataenvio").val($data);
            $("#autores").val($autor);
            $("#tags").val($tags);
            $("#Atitulo").val($titulo);
            $("#corpo").val($corpo);
            $("#referencias").val($ref);

            $.ajax({
                type: "POST",
                dataType: "json",
                url: "../php/getDes.php",
                data: {id: $id },
                
                success: function (retorno) {
                    $("#descricao").val(retorno);
                }
            
              });



        }, 1000);
        

      }); 

});
  