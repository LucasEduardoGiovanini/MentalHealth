$(document).ready(function () {

    $("#sobre").click(function () {
      window.location.replace("sobre.html");
    });  

    $("#inicio").click(function () {
      window.location.replace("index.html");
    });

    $("#itensenviados").click(function () {
      window.location.replace("emailenviado.html");
    });
  
  });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("texto_img").style.fontSize = "50px";
    document.getElementById("img_topo").style.height = "150px";
    document.getElementById("texto_img").style.textAlign = "left";
    document.getElementById("texto_img").style.lineHeight = "220px";
    document.getElementById("img_topo").style.paddingLeft = "50px";
    
  } else {
    document.getElementById("texto_img").style.fontSize = "90px";
    document.getElementById("img_topo").style.height = "330px";
    document.getElementById("texto_img").style.textAlign = "center";
    document.getElementById("texto_img").style.lineHeight = "400px";
    document.getElementById("img_topo").style.paddingLeft = "0px";
  }
}