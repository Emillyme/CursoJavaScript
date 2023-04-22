// ITERANDO UM ARRAY

const numeros = [1,2,3,4,5];

numeros.forEach(function (numero) {
    console.log(numero);
});

//reduzindo o código
numeros.forEach ((numeros, indice) => console.log(numeros, indice))

