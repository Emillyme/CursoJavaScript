// Objeto Endereço 

//Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco){
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);

//https://youtu.be/i6Oi-YtXnAU?t=11409
//