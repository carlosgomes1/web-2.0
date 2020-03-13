function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gerarCor() {
    var novaCor = getRandomColor();
    document.getElementById('area').style.backgroundColor = novaCor
    document.getElementById('text').innerHTML = novaCor
}