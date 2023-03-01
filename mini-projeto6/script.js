//Mini projeto 6: ENCONTRE O STRING

// criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse projeto

const filme = {
    titulo: 'Pearl',
    ano: 2022,
    diretor: 'Ti West',
    personagem: 'Pearl'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){

    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop, obj[prop])

}
