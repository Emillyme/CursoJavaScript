//ESVAZIAR UM ARRAY
//https://youtu.be/i6Oi-YtXnAU?t=14276

let numeros = [1,2,3,4,5,6];
let outros = numeros;

//Solução 1:
numeros = []; 
//obs: esse vai deletar apenas o array de numeros, mas como ele é um objeto flexivel
// que pode estar em outro, o outro que atribuiu ele não será apagado.


//Solução 2:
numeros.length = 0;
//obs: esse apaga tudo :)
//o mais recomendavel!!!

//Solução 3:
numeros.splice(0,numeros.length);


//Solução 4:
while (numeros.length > 0)
    numeros.pop();
//obs: custa mt processamento