$(document).ready(function () {


  $(".button_preview").click(function () {
    var id_artigo = $(this).attr("value");
    document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.5s";
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
              mostrar(retorno.titulo, retorno.conteudo,retorno.autores);
          }
      
        });

      }, 800);
      

  });

  });

  function mostrar(titulo, conteudo, autores) { // para criacao de novos conteudos 
    $("#titulo_artigo").html(titulo);
    $("#corpo_artigo").html(conteudo);
    $("#autor_artigo").html(autores);
  
  } 