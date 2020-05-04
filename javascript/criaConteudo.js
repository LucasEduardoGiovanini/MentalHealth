$(document).ready(function () {
    $("#benviar").click(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/criaConteudo.php",
            data: {
                id: $("#id").val(),
                autores: $("#autores").val(),
                local_desenvolvimento: $("#local_desenvolvimento").val(),
                titulo: $("#titulo").val(),
                assunto: $("#assunto").val(),
                descricao: $("#descricao").val(),
                dataenvio: $("#dataenvio").val(),
                corpo: $("#corpo").val(),
                referencias: $("#referencias").val(),
                tags: $("#tags").val()
            },
            success: function (retorno) {
            }
        });
        window.close();
    })

});