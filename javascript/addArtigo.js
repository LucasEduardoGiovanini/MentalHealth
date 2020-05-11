$(document).ready(function () {
    

    $("#addArtigo").click(function () { 
        document.body.scrollTop = 0;
        document.getElementById("novo").style.animation = "first ease 0.5s";
        setTimeout(function (){
    
          enableStylesheet(document.getElementById("cria_conteudo"));
          disableStylesheet(document.getElementById("css_pagArtigos"));
          disableStylesheet(document.getElementById("css_insere_artigo"));
          disableStylesheet(document.getElementById("css_sobre"));
          disableStylesheet(document.getElementById("css_artigo"));
          disableStylesheet(document.getElementById("css_inicio"));
          $("#div_texto").load("../html/CriaConteudo.html");

          
        }, 800);
        setTimeout(function() {
            var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "../javascript/criaConteudo.js"; 
          document.getElementsByTagName("head")[0].appendChild(script);
          },900);
    
      });

});


