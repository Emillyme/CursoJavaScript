// Faixa de Preço

// É que voce crie um array de objetos de faixa de preço para que ela possa ser usado em um site igual ao mercado livre.
// faixas, tooltip, minimo, maximo


// Primeira Opção:

let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999}
    
];

// Segunda Opção (usando Factory Function):

function criaFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000)
];

// Terceira Opção (usando Constructor Function):

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 20, 30),
    new FaixaPreco('f', 30, 40),
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);
