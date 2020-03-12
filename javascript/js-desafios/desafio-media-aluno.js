var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var nota3 = parseFloat(prompt("Digite a terceira nota: "));
var nota4 = parseFloat(prompt("Digite a quarta nota: "));

media = (nota1 + nota2 + nota3 + nota4) / 4;

if(media < 5) {
    document.write("<h1> MÉDIA FINAL: " + media + " </h1>")
    document.write("<h2> RUIM! </h2>")
} else if ( media < 7 ) {
    document.write("<h1> MÉDIA FINAL: " + media + " </h1>")
    document.write("<h2> RAZOÁVEL! </h2>")
} else if ( media < 9 ) {
    document.write("<h1> MÉDIA FINAL: " + media + " </h1>")
    document.write("<h2> BOM! </h2>")
} else {
    document.write("<h1> MÉDIA FINAL: " + media + " </h1>")
    document.write("<h2> ÓTIMO! </h2>")
}