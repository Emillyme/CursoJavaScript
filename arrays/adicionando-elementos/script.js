//ARRAY: ADICIONANDO ELEMENTOS
const numeros = [1,2,3];

// Inicio
numeros.unshift(0); //unshift: adiciona elementos no INICIO do array
console.log(numeros);

// Meio
numeros.splice(1,0,'a');
    //(1,0,'a') = numero que vai iniciar(substituir no ARRAY), 
    //numero que vai deletar(colocamos 0 pq n vamos deletar nada), numero que vai adicionar
console.log(numeros);

// Final
numeros.push(5);
console.log(numeros);//push: adiciona numeros no final do array

//exercicio simples:

let alfabeto = ['a', 'b', 'c'];

//inicio:
alfabeto.unshift('z');
console.log(alfabeto);

//meio
alfabeto.splice(2,0,'g');
console.log(alfabeto);
