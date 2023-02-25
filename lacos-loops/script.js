
//LOOPS E LAÇOS:


//FOR --------------------------------------
console.log("--------- FOR");

for (let i = 0;i < 5; i++){
    console.log('Estou aprendendo!', i);
}
//obs: "i" é abreviação de index, indice.
//video explicando o laço for.
//https://youtu.be/i6Oi-YtXnAU?t=4681

//loop de numeros impares
for(let a = 1; a<=5; a++){
    if(a % 2 !== 0 ){// modulus: resto de uma divisão
        console.log(a);
    }
}

//WHILE --------------------------------------
console.log("--------- WHILE");

let b = 5;

//loop de numeros impares
while (b >= 1){
    if(b % 2 !== 0 ){
        console.log('bah', b);
    }
    b--;
}

//Do..WHILE --------------------------------------
console.log("--------- Do..WHILE");


let i = 0;

do {
    console.log('Digitando...', i);
    i++;
} while(i < 10);


//for-in --------------------------------------
console.log("--------- FOR..IN");

const pessoa = {
    nome:'Jhonatan',
    idade: 25
};

//key-value
//key: nome value: 'jhonatan'

for(let chave in pessoa){
    console.log(chave, pessoa['nome']);// pode usar pra acessar (pessoa.nome)
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores){
    console.log(indice, cores[indice])
}


//for-of --------------------------------------
console.log("--------- FOR..OF");

for(let cor of cores){
    console.log(cor);
}