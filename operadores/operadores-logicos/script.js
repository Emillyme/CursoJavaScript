// OPERADORES LÓGIGOS

// e (&&) = Só retorna TRUE se os dois operandos forem true
console.log("&&");
console.log(true && true); //true
console.log(false && true); //false
console.log(false && false); //false

//

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

//////


// ou (||) = só retorna true se um dos operandos forem true
console.log("||");
console.log(true || true); //true
console.log(false || true); //true
console.log(false || false); //false

let maiorDeIdade2 = false;
let possuiCarteiraDeTrabalho2 = true;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;

console.log(podeAplicar2);

///////


// NOT (!) = Negação 
console.log("!");
let maiorDeIdade3 = true;
let possuiCarteiraDeTrabalho3 = true;
let podeAplicar3 = maiorDeIdade3 || possuiCarteiraDeTrabalho3;

console.log('pode aplicar:', podeAplicar);

let canditadoRecusado = !podeAplicar;
console.log('Canditado Recusado:', canditadoRecusado);