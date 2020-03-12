function calcularAreaTerreno( largura, comprimento ) {
    var area = largura * comprimento;
    return area;
}

var l = parseFloat(prompt("Digite a largura do terreno: "))
var h = parseFloat(prompt("Digite a altura do terreno: "))

var area = calcularAreaTerreno(l, h);

document.write("<h1> Área do terreno: " + area + "</h1");

function soma( a, b ) {
    return a + b;
}

console.log(soma(7, 8)); // OK
console.log(soma(7, 7, 7, 7, 7)); // vai ignorar os demais, já que na original só é pedido um
console.log(soma(7)); // retornará NaN
console.log(soma()) // retornará NaN