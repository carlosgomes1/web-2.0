var n1 = parseFloat(prompt("Digite um número: "));
var operacao = prompt("Agora uma operação(soma ou subtração): ");
var n2 =  parseFloat(prompt("Digite outro número: "))

function calculo( n1, n2, operacao ) {
    if(operacao == "soma") {
        document.write("O resultado é: " + (n1 + n2));
    } else if(operacao == "subtração") {
        document.write("O resultado é: " + (n1 - n2));
    } else {
        document.write("Operação inexistente");
    }
}

calculo(n1, n2, operacao);