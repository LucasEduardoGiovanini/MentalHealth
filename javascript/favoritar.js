$("#favorito").click(function () {
    if($("#nome_user").val() == null){
        alert("faça login para favoritar um conteúdo!");
        
    }
    else if($("#nome_user").attr("value") == 1){
        $("#nome_user").attr("value",0);
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/desfavoritar.php",
            data: {
                loginxml: $("#nome_user").text(),
                idxml: $("#id_artigo").text()
            },
            success: function (retorno) {
                $("#favorito").html("<img src=\"../Imagens/star_fav_off.png\" alt=\"\">");
            },
            error:function(){
                alert("Houve um problema ao remover dos favoritos.");
            }

        });
    }
    else{
        $("#nome_user").attr("value",1);
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/favoritar.php",
            data: {
                loginxml: $("#nome_user").text(),
                idxml: $("#id_artigo").text()
            },
            success: function (retorno) {
                $("#favorito").html("<img src=\"../Imagens/star_fav_on.png\" alt=\"\">");
            },
            error:function(){
                alert("Houve um problema ao salvar favorito.");
            }

        });
    }
});