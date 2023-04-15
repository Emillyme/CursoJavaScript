// Constructor Function 

// Criar um objeto postagem
// título, mensagem, autor, visuzalizações, comentarios, estaoaovivo

function Postagem (titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaaovivo = false
}

let postagem = new Postagem('O amor até a queda', 'mensagem escrita aqui', 'Emilly') //preste atenção nessa linha (postagem e Postagem)
console.log(Postagem);