// PROPRIEDADE length = QUANTIDADE DE CARÁCTERES
var nome = "Carlos Gomes";
var nome2 = "Julia Caroline";

document.write("String 1: Carlos Gomes <br> String 2: Julia Caroline <br><br>")
document.write("Quantidade de carácteres: " + nome.length  + "<br>");
document.write("Caráctere na posição 0: " + nome.charAt(0) + "<br>"); // CARÁCTER NA POSIÇÃO 0
document.write("Juntando a string 1 com a string 2: " + nome.concat(nome2) + "<br>"); // IRÁ JUNTAR AS DUAS STRINGS
document.write("Termina com Gomes: " + nome.endsWith("Gomes") + "<br>"); // IRÁ DEVOLVER UM BOOLEAN SE TERMINAR COM GOMES
document.write("Tem Car incluída na string: " + nome.includes("Car") + "<br>"); // IRÁ VERIFICAR SE DENTRO DA STRING HÁ UMA "STRING" COMO ESSA
document.write("Primeira posição encontrado o caráctere C: " + nome.indexOf("C") + "<br>"); // PRIMEIRA POSIÇÃO ENCONTRADA COM O VALOR C
document.write("Ultima posição encontrado o caráctere o: " + nome.lastIndexOf("o") + "<br>") // ULTIMA POSIÇÃO EM QUE A LETRA FOI ENCONTRADA
document.write("Repetindo a string 3 vezes: " + nome.repeat(3) + "<br>"); // REPETE A STRING TANTAS VEZES
document.write("Colocando Cacuuuuu no lugar de Carlos: " + nome.replace("Carlos", "Cacuuuuu") + "<br>"); // EDITA A STRING COM OUTRO VALOR
document.write("Posição inicial da string Gomes: " + nome.search("Gomes") + "<br>"); // PROCURANDO ONDE COMEÇA A POSIÇÃO DE UMA DETERMINADA STRING // SE NÃO ACHAR = -1
document.write("Posição 0 a 4: " + nome.slice(0, 4) + "<br>"); // RETORNA O VALOR DA STRING DE UMA POSIÇÃO A OUTRA
document.write("Transformando os espaços em ,: " + nome.split(" ") + "<br>"); // TRANSFORMA EM , O QUE FOI PASSADO
document.write("Começa com Carlos: " + nome.startsWith("Carlos") + "<br>"); // VE SE UMA STRING COMEÇA COM TAL VALOR
document.write("A partir da posição 1, 7 carácteres: " + nome.substr(1, 7) + "<br>"); // PEGA A PRIMEIRA POSIÇÃO E A PARTIR DESSA PEGA MAIS 7
document.write("Carácteres da posição 1 a 5: " + nome.substring(1, 5) + "<br>"); // Mostra os carácteres de 1 a 5
document.write("Letras minúsculas: " + nome.toLowerCase() + "<br>"); // transforma em letras minusculas
document.write("Letras maiúsculas: " + nome.toUpperCase() + "<br>"); // transforma em letras maiusculas
document.write(nome.trim() + "<br>"); // APAGA OS ESPAÇOS ANTES E DEPOIS
document.write(nome.valueOf() + "<br>"); // NAO ENTENDI