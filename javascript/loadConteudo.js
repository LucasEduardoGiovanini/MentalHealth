$(document).ready(function () {
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/lerarquivos.php",
    data: {
    },
    
    success: function (retorno) {
      var publicacoes = [];
      
      $("#div_texto").append("<div id =\"novo\" > </novo>");
      for ($i = 1; $i <= retorno[0].qnt; $i++) { // para cada linha da matriz de retorno, adiciona  uma nova linha com os dados desse email
        publicacoes.push(retorno[$i])// adiciono a publicacao do momento na minha lista com todas as publicacoes
        criar(retorno[$i].titulo,retorno[$i].id, retorno[$i].descricao, retorno[$i].autores,retorno[$i].tags);  
      }
      sessionStorage.setItem(publicacoes,1)//armazeno essa lista de conteudos para chama-la em filtraConteudo.js
    }

  });

function criar(titulo, id, descricao, autor, tags) {
  $("#novo").append("<div id=\"Caixa_Artigo\"> <button class=\"button_preview\" value=" + id +"><table id=\"preview_artigo\"><tr>               <td rowspan=\"6\" id=\"img_artigo\"> </td>                <td id=\"titulo_artigo\"> " + titulo + "</td>                <td rowspan=\"6\"> <img src=\"../Imagens/seta.png\" id=\"seta\"> </td>            </tr>            <tr>                <td id=\"autores_artigo\">"+ "por: " + autor +"</td>            </tr>            <tr>                <td id=\"des_artigo\"> "+ descricao +"</td>            </tr>            <tr>                <td id = \"tags_artigo\">" + tags + " </td>            </tr>        </table>    </button> </div>");
}
    

});