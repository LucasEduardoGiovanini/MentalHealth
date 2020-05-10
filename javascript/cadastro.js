$(document).ready(function () {
    $("#Bcadastro").click(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/cadastro.php",
            data: {
                loginxml: $("#username").val(),
                senhaxml: $("#password").val()
            },
            success: function (retorno) {
                $("#account").load("usuario.html");
                $("#inputs_login").html("<h3>Cadastro efetuado com sucesso!</h3>");
                setTimeout(function (){ 
                    $("#nome_user").html(retorno);
                }, 100); 
                
            },
            error:function(){
                alert("Usuário já existe/inputs inválidos");
            }

        });
    })
});