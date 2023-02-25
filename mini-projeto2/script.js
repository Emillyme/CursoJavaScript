//Mini projeto 2: Máximo entre dois valores


//Escreva uma função que usa 2 números e retorna o maior entre eles

let valores = dizerMaior(10, 20);

function dizerMaior(a, b){
    if (a > b){
        console.log("Maior:", a)
    }
    else {
        console.log("Maior:", b)
    }
}

// formas de simplificar o código:

//1)

let valorMaior = max(10, 20);
console.log(valorMaior)

function max(numero1, numero2){
    if (numero1 > numero2)
    return numero1;
    else return numero2;
}


//2)

let valorMaior2 = max(10, 20);
console.log(valorMaior2)

function max(numero1, numero2){
    if (numero1 > numero2)
    return numero1; //se esse não for ele automaticamente vai pro segundo ;)
    return numero2;
}


//3)

let valorMaior3 = max(10, 20);
console.log(valorMaior3)

function max(numero1, numero2){
    return numero1>numero2 ? numero1: numero2;
}
