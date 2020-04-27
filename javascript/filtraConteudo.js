$(document).ready(function () {

    function filter(){
        var barra_pesquisa;
        barra_pesquisa = document.getElementById("barra_pesquisa").nodeValue;//pego o que foi inserido na barra de busca para realizar a filtragem.
   
        var todos_conteudos;
        var lista_id;
        var lista_similaridades;

        lista_id =[];
        lista_similaridades = [];
        todos_conteudos = sessionStorage.getItem(publicacoes)//pego o array com todas as publicações dentro de loadConteudo.js
        for ($i=0;$i<todos_conteudos.length;$i++){

            lista_id.push(todos_conteudos[$i].id)//conjunto de tags de x publicação ocupa x posicação na minha lista
            lista_similaridades.push(LevenshteinDistance(barra_pesquisa,todos_conteudos[$i].tags)) //armazeno na minha lista a similaridade entre a tag daquela publicação como texto dado pelo usuário.         
        } 

        //agora busca-se com a variavel "valores_separados_de_pesquisa" a maior similaridade dentro da lista "lista_counteudos".
        //quando acharmos a maior similaridades, buscaremos pela publicação na lista de IDS, já que ambas tem o mesmo tamanho e as mesmas posições.
    }
    
    
    (function () { //compara a similaridade entre 2 strings
        LevenshteinDistance =  function(a, b){
            if(a.length == 0) return b.length; 
            if(b.length == 0) return a.length; 

            var matrix = [];

            // increment along the first column of each row
            var i;
            for(i = 0; i <= b.length; i++){
                matrix[i] = [i];
            }

            // increment each column in the first row
            var j;
            for(j = 0; j <= a.length; j++){
                matrix[0][j] = j;
            }

            // Fill in the rest of the matrix
            for(i = 1; i <= b.length; i++){
                for(j = 1; j <= a.length; j++){
                if(b.charAt(i-1) == a.charAt(j-1)){
                    matrix[i][j] = matrix[i-1][j-1];
                } else {
                    matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                            Math.min(matrix[i][j-1] + 1, // insertion
                                                    matrix[i-1][j] + 1)); // deletion
                }
                }
            }

        return matrix[b.length][a.length];
    };
})();

});