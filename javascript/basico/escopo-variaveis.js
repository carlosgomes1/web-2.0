// 3 escopos = global, função, bloco

/*
    VARIAVEIS CRIADAS NO ESCOPO GLOBAL PODEM SER UTILIZADAS EM QUALQUER LUGAR
    VARIAVEIS CRIADAS COM A PALAVRA RESERVADA VAR DENTRO DE ESCOPO DE BLOCOS SOBEM UM NÍVEL ATÉ O ESCOPO GLOBAL
    VARIAVEIS CRIADAS NO ESCOPO DE FUNÇÃO NÃO SOFREM ELEVAÇÃO (SÓ FICAM DISPONIVEIS DENTRO DA FUNÇÃO)
*/

var serie = "La Casa de Papel" // global

if (true) { // escopo de bloco
    var serie2 = "GoT";
    document.write(serie + " escopo bloco");
}

document.write("<br>" + serie2 + " escopo global");

document.write("<br>")

function x() { // escopo de função
    document.write(serie + " escopo função")
    document.write(serie2 + " escopo função");
    var serie3 = "Sex Education";
}

document.write("<br>" + serie3 + " escopo global");

x();