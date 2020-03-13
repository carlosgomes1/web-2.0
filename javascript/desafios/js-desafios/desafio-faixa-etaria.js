var idade = parseInt(prompt("Digite sua idade: "));

if(idade >= 0 && idade < 15) {
    document.write("<h1> CRIANÇA </h1>")
} else if(idade >= 15 && idade < 30) {
    document.write("<h1> JOVEM </h1>")
} else if(idade >= 30 && idade < 60) {
    document.write("<h1> ADULTO </h1>")
} else if(idade >= 60) {
    document.write("<h1> IDOSO </h1>")
} else {
    document.write("<h1> IMPOSSIVEL </h1>")
}