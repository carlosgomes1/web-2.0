function distribuiCaractere() {

    // Selecionar o valor digitado
    var caractere = document.getElementById('entrada').value

    // Limpar o campo
    document.getElementById('entrada').value = '';
    console.log(caractere)

    switch( caractere ) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            document.getElementById('numeros').value += caractere
            break;
        default:
            document.getElementById('letras').value += caractere
            break;

    }

}