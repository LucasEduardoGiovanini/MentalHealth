$(document).ready(function () {
  $("#div_texto").load("inicio.html"); 
  enableStylesheet(document.getElementById("css_inicio"));


  $("#titulo").click(function () { 
    window.location.reload();
  });
  
    $("#sobre").click(function () {
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.8s";


      setTimeout(function (){
        enableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_inicio"));
        disableStylesheet(document.getElementById("css_artigo"));
        disableStylesheet(document.getElementById("css_pagArtigos"));
      $("#div_texto").load("sobre.html");    
      
    }, 800);  
    
    });  


    $("#inicio").click(function () {
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.8s";
      setTimeout(function (){
        
        enableStylesheet(document.getElementById("css_inicio"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_artigo"));
        disableStylesheet(document.getElementById("css_pagArtigos"));
       
        $("#div_texto").load("inicio.html");
            }, 800);
    });


    $("#Bpesquisar").click(function () {
      //alert($("#pesquisa").val());
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.8s";
      setTimeout(function (){

        enableStylesheet(document.getElementById("css_pagArtigos"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_artigo"));
        disableStylesheet(document.getElementById("css_inicio"));
        $("#div_texto").html(" ");
        addScriptPesquisa();
            }, 800);
    });

    $("#artigos").click(function () { 
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.8s";
      setTimeout(function (){
        enableStylesheet(document.getElementById("css_pagArtigos"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_artigo"));
        disableStylesheet(document.getElementById("css_inicio"));
        $("#div_texto").html(" ");
        $("#div_texto").append("<div id =\"novo\" > </novo>");
        addScript();

        
      }, 800);

    });

    $("#account").click(function () { 
      setTimeout(function (){
          $("#username").focus();
      }, 300);
    });

    setTimeout(changeText, 500);
  });

window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("texto_img").style.fontSize = "35px";
    document.getElementById("img_topo").style.height = "150px";
    document.getElementById("texto_img").style.lineHeight = "220px";
    
  } else {
    document.getElementById("texto_img").style.fontSize = "70px";
    document.getElementById("img_topo").style.height = "330px";
    document.getElementById("texto_img").style.lineHeight = "400px";
 
  }
}

function enableStylesheet (node) {
  node.rel = 'stylesheet';
}

function disableStylesheet (node) {
  node.rel = 'alternate stylesheet';
}

function addScript(){

  var script2 = document.createElement("script");
  script2.type = "text/javascript";
  script2.src = "../javascript/loadConteudo.js"; 
  document.getElementsByTagName("head")[0].appendChild(script2);

  setTimeout(function() {
    var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "../javascript/verArtigo.js"; 
  document.getElementsByTagName("head")[0].appendChild(script);
  },500)  
}

function addScriptPesquisa(){
  var script2 = document.createElement("script");
  script2.type = "text/javascript";
  script2.src = "../javascript/filtraConteudo.js";
  document.getElementsByTagName("head")[0].appendChild(script2);

}

var texts = new Array();
    texts.push("Saber ouvir é saber cuidar");
    texts.push("Dê voz a quem precisa de você");
    texts.push("Todas as vidas importam");
    texts.push("Sempre é possível recomeçar");
    texts.push("Não é frescura");

var point = 0;

function changeText(){
  $("#texto_img").text(texts[point]);

  if(point < texts.length - 1){
    point ++;
  }else{
    point = 0;
  } 

  setTimeout(function() {
    $("#texto_img").text(texts[point]);
  },9000)  
  
  setTimeout(changeText, 9000);
}