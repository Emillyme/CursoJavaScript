//ENCONTRANDO ELEMENTOS ARRAY (PRIMITIVOS)
//https://youtu.be/i6Oi-YtXnAU?t=13398

const numeros = [1,2,3,1,4];
console.log(numeros.indexOf(2));
//IndexOf: localiza o elemento 2 dentro de um array, 
//e retorna em qual numero ele ta no ARRAY. (como por exemplo o 2, que retornaria 1)

console.log(numeros.indexOf(5));
//caso não ouver o elemento procurado dentro do array, retornará -1.

console.log(numeros.lastIndexOf(1)); 
//lastIndexOf: ele vai procurar a ultima mudança que teve com o numero 1


console.log(numeros.indexOf(2) !== -1);
console.log(numeros.includes(2)); //mais simples
//os dois retornam true se existe valores usando indexof.


// exercicios rapido:

///                0    1    2    3    4
const alfabeto = ['a', 'b', 'c', 'd', 'b'];
console.log(alfabeto.indexOf('b')); // retorna 1
console.log(alfabeto.lastIndexOf('b')); // retorna 4 pq foi a ultima mudança com a repetição b
console.log(alfabeto.includes('a'));//retorna true porque existe 'a' no array
// se n existisse retornaria falso.