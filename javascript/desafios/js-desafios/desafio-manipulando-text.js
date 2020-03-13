function mudarCorComFoco() {
    var texto = document.getElementById('text') 
    texto.style.backgroundColor = "yellow"
}

function recuperarDados() {
    var texto = document.getElementById('text').value
    var texto1 = document.getElementById('text')
    if( texto.length <= 3 ) {
        texto1.style.backgroundColor = 'red'
    } else {
        texto1.style.backgroundColor = 'green'
    }
}