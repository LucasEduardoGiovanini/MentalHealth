$(document).ready(function () {

    $("#Bfav").click(function () { 
        document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.5s";
      setTimeout(function (){
        enableStylesheet(document.getElementById("css_pagArtigos"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_artigo"));
        disableStylesheet(document.getElementById("css_inicio"));
        $("#div_texto").html(" ");
        addScript();        
      }, 800);

      $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/lerFavoritos.php",
        data: {
            loginxml: $("#nome_user").text()
        },
        
        success: function (retorno) {
          
          setTimeout(function (){
            $("#div_texto").append("<div id =\"novo\" > </novo>");
            for ($i = 1; $i <= retorno[0].qnt; $i++) { // para cada linha da matriz de retorno, adiciona  uma nova linha com os dados desse email
                criar(retorno[$i].titulo,retorno[$i].id, retorno[$i].descricao, retorno[$i].autores,retorno[$i].tags);  
              }
          }, 1000);

          
        }
    
      });



      });

   
    
  function criar(titulo, id, descricao, autor, tags) {
    $("#novo").append("<div id=\"Caixa_Artigo\"> <button class=\"button_preview\" value=" + id +"><table id=\"preview_artigo\"><tr>               <td rowspan=\"6\" id=\"img_artigo\"> </td>                <td id=\"titulo_artigo\"> " + titulo + "</td>                <td rowspan=\"6\"> <img src=\"../Imagens/seta.png\" id=\"seta\"> </td>            </tr>            <tr>                <td id=\"autores_artigo\">"+ "por: " + autor +"</td>            </tr>            <tr>                <td id=\"des_artigo\"> "+ descricao +"</td>            </tr>            <tr>                <td id = \"tags_artigo\">" + tags + " </td>            </tr>        </table>    </button> </div>");
  }
  
  function addScript(){
    setTimeout(function() {
      var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "../javascript/verArtigo.js"; 
    document.getElementsByTagName("head")[0].appendChild(script);
    },500)  
  }    
  
  });