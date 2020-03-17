var objetos = []

var divResult = document.getElementById('result')
var lista = document.createElement('ul')
divResult.appendChild(lista)

function adicionar() {
    // Pegando o valor inserido no textInput
    var input = document.getElementById('input')

    var item = document.getElementById('input').value

    // Verificando se o valor do input é vazio
    if( item === '' ) {
        alert('INFORME UM VALOR VÁLIDO')
        return
    } else if( objetos.indexOf(item) >= 0 ) {
        alert('ITEM JÁ EXISTE NA LISTA, DIGITE OUTRO')
        input.value = ''
        return
    } else {

        // Adicionando input ao array
        objetos.push(item)

        // Criando elementos de lista e adicionando ao HTML
        var itemLista = document.createElement('li')
        lista.appendChild(itemLista)
        itemLista.innerHTML = item

        // limpando conteúdo do input
        input.value = ''
    }
}

function ordenar() {
    var listaOrdenada = objetos.sort()

    divResult.removeChild(lista)

    for (itens in listaOrdenada) {
        console.log(listaOrdenada[itens])
        var itemLista = document.createElement('li')
        lista.appendChild(itemLista)
        itemLista.innerHTML = listaOrdenada[itens]

        divResult.appendChild(lista)
    }
}