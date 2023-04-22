// REMOVENDO ELEMENTOS

const numeros = [1,2,3,4,5,6];


//FINAL
const ultimo = numeros.pop();
console.log(ultimo); //6
console.log(numeros); //vai ficar: [1,2,3,4,5] pois removeu o 6

//INICIO
const primeiro = numeros.shift();
console.log(primeiro); //1
console.log(numeros); //vai ficar: [2,3,4,5] pois removeu o 1 (e antes o 6)

//MEIO   (2) indice no array - quantos quer remover (1)
const meio = numeros.splice(2, 1);
console.log(meio);