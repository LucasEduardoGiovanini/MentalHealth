$(document).ready(function () {
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "../php/lerartigo.php",
      data: {id: 2 },
      
      success: function (retorno) {
        console.log("MANO ENTRO");
          mostrar(retorno.titulo, retorno.conteudo,retorno.autores);
          
      }
      
    });
  
    function mostrar(titulo, conteudo, autores) { // para criacao de novos conteudos 
        $("#titulo_artigo").html(titulo);
        $("#corpo_artigo").html(conteudo);
        $("#autor_artigo").html(autores);

    }
  
      
  
  });