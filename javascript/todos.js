$(document).ready(function () {
    $("#sobre").click(function () {
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.5s";

      setTimeout(function (){
        enableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_inicio"));
        disableStylesheet(document.getElementById("css_artigo"));
      $("#div_texto").load("sobre.html");    
    }, 800);  
    });  

    $("#inicio").click(function () {
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.5s";
      setTimeout(function (){
        enableStylesheet(document.getElementById("css_inicio"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_artigo"));
       
        $("#div_texto").load("inicio.html");
            }, 800);
    });

    $("#artigos").click(function () {
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.5s";
      setTimeout(function (){
        enableStylesheet(document.getElementById("css_artigo"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_inicio"));
        $("#div_texto").load("artigos.html");
        enableScript(document.getElementById("js_artigo"));
      }, 800);
      
    });

    setTimeout(changeText, 500);
  });

window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("texto_img").style.fontSize = "35px";
    document.getElementById("img_topo").style.height = "150px";
    //document.getElementById("texto_img").style.transform = "translate(-35%, 0)";
    document.getElementById("texto_img").style.lineHeight = "220px";
    
  } else {
    document.getElementById("texto_img").style.fontSize = "70px";
    document.getElementById("img_topo").style.height = "330px";
    //document.getElementById("texto_img").style.transform = "translate(0, 0)";
    document.getElementById("texto_img").style.lineHeight = "400px";
 
  }
}


function enableStylesheet (node) {
  node.rel = 'stylesheet';
}

function disableStylesheet (node) {
  node.rel = 'alternate stylesheet';
}

function enableScript (node) {
  node.type = 'text/javascript';
}


function disableScript (node) {
  node.type = 'text/javascript alternate';
}

var texts = new Array();
    texts.push("Saber ouvir é saber cuidar");
    texts.push("Dê voz a quem precisa de você");
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