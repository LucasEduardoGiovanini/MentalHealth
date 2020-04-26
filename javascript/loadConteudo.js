$(document).ready(function () {
  $("#logout").click(function () {
    window.location.replace("login.html");
  });
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/lerarquivos.php",
    data: {
    },
    success: function (retorno) {
      var publicacoes = [];
      for ($i = 1; $i <= retorno[0].qnt; $i++) { // para cada linha da matriz de retorno, adiciona  uma nova linha com os dados desse email

        publicacoes.push(retorno[$i])// adiciono a publicacao do momento na minha lista com todas as publicacoes
        criar(retorno[$i].titulo,retorno[$i].id, retorno[$i].conteudo, retorno[$i].assunto, retorno[$i].dataenvio, retorno[$i].tags, retorno[$i].local_desenvolvimento, retorno[$i].autores);
        
      }
      sessionStorage.setItem(publicacoes,1)//armazeno essa lista de conteudos para chama-la em filtraConteudo.js
    }

  });

  function criar(titulo, conteudo, assunto, dataenvio) { // para criacao de novos conteudos 
    $("#emails").append("<tr><td><div class = \"LinhaEmail\" cellspacing =\"100\"><table><tr><td><img class = \"perfil\" src=\"http://localhost/Projeto_Email/Imagens/ImgPerfil.png\" alt=\"\"></td><td class = \"E1\">" + email + "</td><td class = \"E2\"><b>Assunto: </b>" + assunto + "</td><td class = \"E3\"><b>Data: </b>" + dataenvio + " -- " + conteudo + "</td></tr></table></div></td></tr>");

  }


});