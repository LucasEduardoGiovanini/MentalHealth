$(document).ready(function () {
    $("#BUTAO").click(function () {
        alert("caldo de cana")
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../php/criaConteudo.php",
            data: {
                pesquisa: $("#pesquisa").val()
            },
            success: function (retorno) {
                alert("Criado com sucesso!");
                $("#artigos").click();
            },

        });



       /* $("#pesquisa").keyup(function(event) {
            if (event.keyCode === 13) {
                $("#BUTAO").click();
                alert("B====D")
            }
        });*/



    });
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "../php/lerarquivos.php",
      data: {
      },
      
      success: function (retorno) {
        for ($i = 1; $i <= retorno[0].qnt; $i++) { // para cada linha da matriz de retorno, adiciona  uma nova linha com os dados desse email
            sessionStorage.setItem(retorno.tags,retorno.id)//armazeno essa lista de conteudos para chama-la em filtraConteudo.js
          
        }
        
      }
  
    });    
  
  });