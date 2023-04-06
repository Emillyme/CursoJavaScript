// Objeto Postagem de Blog

// Eu quero que voce crie nesse exercício um objeto de postagem de blog que vai conter as seguintes propriedades:

//Postagem
/*
titulo
mensage
autor
visualizados
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        { autor: 'a', mensagem: 'b'},
        { autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem)