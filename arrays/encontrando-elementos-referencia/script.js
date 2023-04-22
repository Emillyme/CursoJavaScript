// ENCONTRANDO ELEMENTOS (TIPOS DE REFERENCIA)
//https://youtu.be/i6Oi-YtXnAU?t=13645

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
})
console.log(marca);


//exercicio rapido
const vestidos = [
    {tamanho: 'G', cor: 'Vermelho'},
    {tamanho: 'PP', cor: 'Azul'},
    {tamanho: 'GG', cor: 'Verde'},
];

const vestido = vestidos.find(function(vestido){
    return vestido.cor === 'Vermelho';
})
console.log(vestido);