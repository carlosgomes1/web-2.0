var listaConvidados = [
    'Caco',
    'Liz',
    'Henry',
    'Magno',
    'Julia',
    'Wislow',
    'Raquel'
]

for( var x = 0; x < listaConvidados.length; x++ ) {
    document.write(listaConvidados[x] + '<br>')
}

document.write('<hr>')

var x = 1

while( x <= 10 ) {

    var y = 1

    while( y <= 10 ) {
        document.write(x + ' x ' + y + ' = ' + (x * y) + '<br>')
        y++
    }

    document.write('<hr>')

    x++
}