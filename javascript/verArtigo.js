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
              mostrar(retorno.titulo, retorno.corpo,retorno.autores,retorno.data, retorno.id,retorno.tags, retorno.referencias);
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
    $("#id_artigo").html(id);
    $("#tags_artigo").html(tags);
    $("#ref_artigo").html(referencias);
  
  } 