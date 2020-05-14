$(document).ready(function () {
    $("#Bcriar").click(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/criaConteudo.php",
            data: {
                id: $("#id").val(),
                autores: $("#autores").val(),
                Atitulo: $("#Atitulo").val(),
                descricao: $("#descricao").val(),
                dataenvio: $("#dataenvio").val(),
                corpo: $("#corpo").val(),
                referencias: $("#referencias").val(),
                tags: $("#tags").val()
            },
            success: function (retorno) {
                alert("Criado com sucesso!");
                $("#artigos").click();
            },
            error:function(){
                alert("Complete todos os campos / defina uma ID ainda não utilizada.");
            }

        });

    });

});


