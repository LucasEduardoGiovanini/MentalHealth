$(document).ready(function () {
    $("#Bexcluir").click(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/removeUser.php",
            data: {
                loginxml: $("#Eusername").val()
            },
            success: function (retorno) {
                setTimeout(function (){ 
                    $("#Ewarning").html("<h3>Usuário Excluído</h3>");
                    var aux = parseInt($("#Eusername").val(""));
                }, 100); 
            },
            error:function(){
                var aux = parseInt($("#Eusername").val(""));
                $("#Ewarning").html("<h3>Usuário não Existe!</h3>");
                $("#Eusername").focus();
            }

        });
    })
});