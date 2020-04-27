$(document).ready(function () {

    $("#sobre").click(function () {
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.5s";

      setTimeout(function (){
        enableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_inicio"));
        disableStylesheet(document.getElementById("css_artigo"));
      $("#div_texto").html("<div id = \"novo\"> <table align = \"center\" id = \"table_sobre\"> <tr><td  id = \"titulo_sobre\">Um projeto para ajudar aos outros.</td> </tr></table><table align = \"center\" class = \"line\"> <tr><td class = \"line_title\">Quem somos</td><td class = \"line_text\"> <div class = \"caixa_texto\">Somos uma instituição sem fins lucrativos, cujo único objetivo é melhorar a sua percepção e compreensão sobre um tema delicado que é a depressão.</div></td></tr></table><table align=\"center\" class = \"line\"> <tr><td class = \"line_text\" > <div class = \"caixa_texto\">Iniciamos nosso desenvolvimento no início de 2020, porém a ideia do tema já rondava nossas mentes a muito tempo</div></td><td class = \"line_title\">Surgimento</td></tr></table><table align=\"center\" class = \"line\"> <tr><td class = \"line_title\">Filosofia</td><td class = \"line_text\" > <div class = \"caixa_texto\">A Mental Health acredita que a única pessoa que pode tornar o mundo melhor, somos nós mesmos. Com esse pensamento, decidimos reunir o máximo de conhecimento sobre o tema,conversando tanto com  psicólogos quanto com pessoas comuns, a fim de buscar resposta para algumas dúvidas.</div></td></tr></table><div align = \"center\" id = \"fim\"> <div class = \"caixa_texto\">        Noção intenção é ajudar qualquer pessoa que tenha dúvida sobre esse tema. Então sinta-se a vontade para nos enviar alguma mensagem, utilize o campo de dúvidas para falar com alguém especializado no assunto, estamos aqui para ajudar e solucionar suas dúvidas! </div></div></div>");    
    }, 800);  
    });  

    $("#inicio").click(function () {
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.5s";
      setTimeout(function (){
        enableStylesheet(document.getElementById("css_inicio"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_artigo"));
  
      $("#div_texto").html("<div id = \"novo\"><table><tr id = \"titulo_texto\"><td>Entenda o lado de alguém que tentou se suicidar.</td><td  rowspan = \"2\" id = \"texto\">					<div class = \"caixa_texto\">			- O Brasil é o país com maior prevalência de pessoas depressivas na América Latina.       <br><br> - O quinto país com maior índice de depressão no mundo.      <br><br>- Cerca de 12 milhões de pessoas sofrem com o mal.      <br> <br>- 23% dos adolescentes entre 13 e 17 anos enxergam o transtorno mental como       um “momento de tristeza” e não uma doença grave.			</div>				</td>			</tr>			<tr>				<td>					<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/WcSUs9iZv-g\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; picture-in-picture\" allowfullscreen></iframe></td></tr></table></div>");
            }, 800);
    });

    $("#artigos").click(function () {
      document.body.scrollTop = 0;
      document.getElementById("novo").style.animation = "first ease 0.5s";
      setTimeout(function (){
        enableStylesheet(document.getElementById("css_artigo"));
        disableStylesheet(document.getElementById("css_sobre"));
        disableStylesheet(document.getElementById("css_inicio"));
       $("#div_texto").html("<div id = \"novo\"><div id = \"caixa_cinza\"><table align = \"center\"><tr><td id = \"titulo_artigo\"></td></tr><tr><td id = \"autor_artigo\"></td></tr><tr><td id = \"corpo_artigo\"></td></tr></table></div></div>");
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