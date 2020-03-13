var nome = prompt("Qual seu nome?");
var altura = parseFloat(prompt("Sua altura? (em cm)"));
var peso = parseFloat(prompt("Seu peso?"));

altura /= 100;

var imc = peso / (altura * altura);
imc = imc.toFixed(2);

if( imc < 16 ) {
    document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: BAIXO PESO MUITO GRAVE")
} else if( imc >= 16 && imc < 17 ) {
    document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: BAIXO PESO GRAVE")
} else if( imc >= 17 && imc < 18.5 ) {
    document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: BAIXO PESO")
} else if( imc >= 18.5 && imc < 25 ) {
    document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: PESO NORMAL")
} else if( imc >= 25 && imc < 30 ) {
    document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: SOBREPESO")
} else if( imc >= 30 && imc < 35 ) {
    document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: OBESIDADE GRAU 1")
} else if( imc >= 35 && imc < 40 ) {
    document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: OBESIDADE GRAU 2")
} else {
    document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como: OBESIDADE MÓRBIDA")
}