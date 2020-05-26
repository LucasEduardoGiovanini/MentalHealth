$(document).ready(function () {

    var barra_pesquisa;
   barra_pesquisa= $("#pesquisa").val();
    //barra_pesquisa = document.getElementById("barra_pesquisa").nodeValue;//pego o que foi inserido na barra de busca para realizar a filtragem.

   $.ajax({
    type: "POST",
    dataType: "json",
    url: "../php/lerarquivos.php",
    data: {
    },
    success: function (retorno) {
        console.log("Funcionou");
        var dict = {};
        for ($i = 0; $i < retorno[0].qnt; $i++) { // para cada linha da matriz de retorno, adiciona  uma nova linha com os dados desse email
                dict[$i] = retorno[$i+1].tags;
              }

           for ($i = 0; $i < Object.keys(dict).length; $i++){ //pegamos a similaridade de cada arquivo e sobreescrevemos seu valor das tags pela sua similaridade calculada.

                dict[$i] = similarity(barra_pesquisa,dict[$i]);

           }
           var keyValues = [];

           for (var key in dict) {
              keyValues.push([ key, dict[key] ])
            }
            keyValues.sort(function compare(kv1, kv2) {

              return kv2[1] - kv1[1]
            });
            console.log(keyValues);
        setTimeout(function (){
        $("#div_texto").append("<div id =\"novo\" > </novo>");

        for ($i = 0; $i <= Object.keys(dict).length;  $i++) { // para cada linha da matriz de retorno, adiciona  uma nova linha com os dados desse email

            criar(retorno[parseInt(keyValues[$i][0])+1].titulo,retorno[parseInt(keyValues[$i][0])+1].id, retorno[parseInt(keyValues[$i][0])+1].descricao,
                retorno[parseInt(keyValues[$i][0])+1].autores,retorno[parseInt(keyValues[$i][0])+1].tags);
          }
      }, 1000);
    },
    });

   function criar(titulo, id, descricao, autor, tags) {
            $("#novo").append("<div id=\"Caixa_Artigo\"> <button class=\"button_preview\" value=" + id +"><table id=\"preview_artigo\"><tr>               <td rowspan=\"6\" id=\"img_artigo\"> </td>                <td id=\"titulo_artigo\"> " + titulo + "</td>                <td rowspan=\"6\"> <img src=\"../Imagens/seta.png\" id=\"seta\"> </td>            </tr>            <tr>                <td id=\"autores_artigo\">"+ "por: " + autor +"</td>            </tr>            <tr>                <td id=\"des_artigo\"> "+ descricao +"</td>            </tr>            <tr>                <td id = \"tags_artigo\">" + tags + " </td>            </tr>        </table>    </button> </div>");
          }

          function addScript(){
            setTimeout(function() {
              var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "../javascript/verArtigo.js";
            document.getElementsByTagName("head")[0].appendChild(script);
            },500)
          }


    function similarity(s1, s2) {
      var longer = s1;
      var shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      var longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }


    function editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();

      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }

    });