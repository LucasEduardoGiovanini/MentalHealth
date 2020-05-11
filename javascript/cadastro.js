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
                var aux2 = parseInt($("#password").val(""));
                $("#username").focus();
            }

        });
    });



    $("#CBcadastro").click(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/cadastroAdmin.php",
            data: {
                loginxml: $("#Cusername").val(),
                senhaxml: $("#Cpassword").val()
            },
            success: function (retorno) {
                $("#Cwarning").html("<h3>Cadastro efetuado!</h3>");  
                var aux3 = parseInt($("#Cusername").val(""));
                var aux4 = parseInt($("#Cpassword").val(""));   
                setTimeout(function (){ 
                    $("#Cwarning").html("");     
                }, 4000); 
                
            },
            error:function(){
                alert("Usuário já existe/inputs inválidos");
                var aux2 = parseInt($("#Cpassword").val(""));
                $("#Cusername").focus();
            }

        });
    });
});