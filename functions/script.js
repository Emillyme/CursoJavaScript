console.log("---- FUNCTIONS ");

//function = Verbo + Substantivo:
// resetaCor
// transformaObjeto
// alterarTamanho
// () -> abrir função

let corSite = "Azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
}

console.log(corSite);
resetaCor("vermelho","escuro");
console.log(corSite);

//--

let forma = "círculo";
function transformaForma(formato, cor){
    forma = formato + ' ' + cor;
}  

console.log(forma);
transformaForma("triângulo","amarelo");
console.log(forma)

console.log("---- TIPOS DE FUNCTIONS ")

//
//
//TIPOS DE FUNÇÕES
//
// Realiza uma tarefa, não devolve nada:
function dizerNome(){
    console.log('emilly');
}

dizerNome();

//faz um calculo ou operação e retorna algo
function multiplicarPorDois(valor){
    return valor* 2;
}

//console.log(multiplicarPorDois(5));
let resultado = multiplicarPorDois(5);
console.log(resultado);