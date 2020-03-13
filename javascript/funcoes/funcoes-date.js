var data = new Date();

document.write(data.getDate() + "<br>") // retorna o dia
document.write(data.getDay() + "<br>") // retorna o dia da semana 0 - 6
document.write(data.getMonth() + 1 + "<br>") // retorna o mes 0 - 11
document.write(data.getFullYear() + "<br>") // retorna o ano

var dataHoje = document.write("<br> DATA: " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());

document.write("<br><hr><br>");

// adicionando dias
document.write(data.toString());
data.setDate(data.getDate() + 1);
document.write("<hr>")
document.write(data.toString());

// adicionando mes
document.write(data.toString());
data.setMonth(data.getMonth() + 1);
document.write("<hr>");
document.write(data.toString());

// adicionando ano
document.write(data.toString());
data.setFullYear(data.getFullYear() + 1);
document.write("<hr>");
document.write(data.toString());
document.write("<br><br><hr><br>")

// COMO FAZER PARA VER A DISTANCIA ENTRE DATAS

//15/03/2022
var data1 = new Date(2022, 2, 15) // LEMBRANDO QUE O MES COMEÇA DO 0

//27/06/2020
var data2 = new Date(2022, 2, 19)

document.write(data1.toString());
document.write("<hr>")
document.write(data2.toString());
document.write("<br><br><hr><br>")
document.write(data1.getTime()); // milisegundos desde a data 1 de janeiro de 1970
document.write("<hr>")
document.write(data2.getTime()); // milisegundos desde a data 1 de janeiro de 1970

// converter datas para algo calculavel


document.write("<br><br><hr><br>")

//encontrar a quantidade de milisegundos entre data 1 e data 2

document.write(Math.abs(data1.getTime() - data2.getTime())); // se a data for negativa então usar o math.abs para transformar em positivo

// 1 dia = 24h, hora = 60 minutos, minutos = 60 segundos, segundo = 1000 milisegundo

document.write("<br><br><hr><br>")
document.write("1 dia tem: " + (1 * 24 * 60 * 60 * 1000) + " milisegundos");
document.write("<br><br><hr><br>");

var milisegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime());
var milisegundosPorDia = (1 * 24 * 60 * 60 * 1000);
document.write("<br><br><hr><br>");

document.write(milisegundosEntreDatas / milisegundosPorDia);
