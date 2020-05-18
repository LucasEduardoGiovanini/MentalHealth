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
                setTimeout(function (){ addScript2();}, 300); 
                
                
            },
            error:function(){
                var aux = parseInt($("#password").val(""));
                
                $("#warning").html("<h3>Login ou senha incorretos!</h3>");
                $("#username").focus();
            }

        });
    })
});


function addScript2(){
    setTimeout(function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "../javascript/addArtigo.js"; 
        document.getElementsByTagName("head")[0].appendChild(script);

        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "../javascript/removeUser.js"; 
        document.getElementsByTagName("head")[0].appendChild(script);
    },500);

  }