$(document).ready(function () {
    $("#Blogin").click(function () {
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/login.php",
            data: {
                loginxml: $("#username").val(),
                senhaxml: $("#password").val()
            },
            success: function (retorno) {
                $("#account").load("usuario.html");
                $("#inputs_login").html("<h3>Login efetuado com sucesso!</h3>");
                setTimeout(function (){ 
                    $("#nome_user").html(retorno);
                }, 100); 
                
            },
            error:function(){
                var aux2 = parseInt($("#password").val(""));
                $("#warning").html("<h3>Login ou senha incorretos!</h3>");
                $("#username").focus();
            }

        });
    });



    $("#BloginAdmin").click(function () {
        
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/loginAdmin.php",
            data: {
                loginxml: $("#username").val(),
                senhaxml: $("#password").val()
            },
            success: function (retorno) {
                $("#account").load("admin.html");
                $("#inputs_login").html("<h3>Login efetuado com sucesso!</h3>");
                setTimeout(function (){ 
                    $("#nome_user").html(retorno);
                }, 100); 
                
            },
            error:function(){
                var aux = parseInt($("#password").val(""));
                
                $("#warning").html("<h3>Login ou senha incorretos!</h3>");
                $("#username").focus();
            }

        });
    })
});