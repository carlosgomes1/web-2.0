function exibirArtigo( id, callbackSuccess, callbackError ) {
    if( true ) { // se o id for encontrado
        // titulo / descrição
        callbackSuccess("A pandemia do Coronavirus", "Um artigo sobre a pandemia do coronavirus"); 
    } else {
        callbackError("Não foi possível encontrar os dados");
    }
}

var callbackSuccess = function( titulo, descricao ) {
    document.write("<h1>" + titulo + "</h1>");
    document.write("<hr>");
    document.write("<h2>" + descricao + "</h2>");
}
var callbackError = function( erro ) {
    document.write("<h1>" + erro + "</h1>")
}

callbackSuccess("Olá", "Caco")
callbackError("ERROOOOO")

// exibirArtigo( 1, function(){ }, function(){ } )
exibirArtigo( 1, callbackSuccess, callbackError );