$(document).ready(function () {


  $(".button_preview").click(function () {
    var id_artigo = $(this).attr("value");

    document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.8s";
      setTimeout(function (){
        enableStylesheet(document.getElementById("css_artigo"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_pagArtigos"));
        disableStylesheet(document.getElementById("css_inicio"));
        $("#div_texto").load("artigos.html");

        $.ajax({
          type: "POST",
          dataType: "json",
          url: "../php/lerartigo.php",
          data: {id: id_artigo },
          
          success: function (retorno) {
              mostrar(retorno.titulo, retorno.corpo,retorno.autores,retorno.data, retorno.id,retorno.tags, retorno.referencias);
          }
      
        });

      }, 800);
      

      setTimeout(function (){
        $.ajax({
          type: "POST",
          dataType: "json",
          url: "../php/confereFavorito.php",
          data: {
                idxml: id_artigo,
                loginxml: $("#nome_user").text()
               },
          
          success: function (retorno) {
            $("#favorito").attr("value",1);
            $("#favorito").html("<img src=\"../Imagens/star_fav_on.png\" alt=\"\">");
          }
      
        });
      }, 800);
      

  });

  });

  function mostrar(titulo, conteudo, autores,data,id,tags,referencias) { // para criacao de novos conteudos 
    $("#titulo_artigo").html(titulo);
    $("#corpo_artigo").html(conteudo);
    $("#autor_artigo").html(autores);
    $("#data_artigo").html(data);
    $("#id_artigo").html("Id:"+id);
    $("#tags_artigo").html(tags);
    $("#ref_artigo").html(referencias);


    setTimeout(function (){
      var script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src = "../javascript/favoritar.js"; 
      document.getElementsByTagName("head")[0].appendChild(script2);

    }, 300);

   
    if($("#right_side").attr("value") == 1){
      $("#caixa_cinza").prepend("<button id = \"edit_artigo\"><img src=\"../Imagens/edit.png\" alt=\"\"></button>");

      var script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src = "../javascript/editar.js"; 
      document.getElementsByTagName("head")[0].appendChild(script2);
    }


  
  } 