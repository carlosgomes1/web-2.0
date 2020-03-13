/*

    SÓ PODE ENTRAR NA BALADA QUEM FOR CORINTHIANO E GOSTA DO NEYMAR

*/

var time = prompt("Qual seu time de coração? ");
var jogador = prompt("Qual o seu jogador favorito? ");

if(time == "Corinthians" && jogador == "Neymar") {
    document.write("<h1> OK, vimos que tem bom caráter, pode entrar. </h1>")
} 

if (time != "Corinthians" && jogador != "Neymar") {
    document.write("<h1> Como você pode torcer para o " + time + " e não para o Corinthians? </h1>")
    document.write("<h1> E PIOR! Ser fã do " + jogador + " e não do Neymar? </h1> ")
} else if (time != "Corinthians") {
    document.write("<h1> Como você pode torcer para o " + time + "? </h1")
} else if (jogador != "Neymar") {
    document.write("<h1> Como você pode ser Corinthiano e fã do " + jogador + " e não do Neymar? </h1>")
}




