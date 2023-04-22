//COMBINANDO ARRAYS

const numeros = [1,2,3,4,5];
const combinado = numeros.join('.');
console.log(combinado);

const frase = 'Olá bem vindo ao curso';
const resultado = frase.split(' ');
console.log(resultado);

console.log (resultado.join('-'));

//exercicio

//exemplo com join:

const cores = ['azul', 'amarelo', 'vermelho', 'verde'];
const corescombinando = cores.join('! ');
console.log(corescombinando);

//exemplo split:

const cores2 = 'rosa roxo laranja ciano';
const coresresultado = cores2.split(' ');
console.log(coresresultado);

//Pegue algum url na internet e tente replicar ele usando join:

//www.significados.com.br/preconceito-racismo-e-discriminacao/
const site1 = ['www','significados','com','br'];
const site2 = ['preconceito','racismo','e','discriminacao'];

const site1resultado = site1.join('.');
console.log (site1resultado);

const site2resultado = site2.join('-');
console.log(site2resultado);

//combinando:

console.log(site1resultado + '/' + site2resultado + '/');
