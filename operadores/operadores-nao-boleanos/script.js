//OPERADORES NÃO BOLEANOS

//Falsy:
// - undefined
// - null
// - 0
// - false
// - ''
// - NaN = not a number

//Truthy

let corPersonalizada = 'Vermelho';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão;

console.log(corPerfil);

//vai dar Vermelho pq o vermelho foi o primeiro a ser preenchido, o || sempre vai retornar o primeiro que foi preenchido
