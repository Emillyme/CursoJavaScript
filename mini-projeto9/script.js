//Mini projeto 9: Contador de asteriscos

//Criar uma função que exibe a quantidade de * 
// que aquela linha possui

exibirAsteriscos(5);

function exibirAsteriscos(linhas){
   //MANEIRA MAIS FACIl:
    let asteriscos = '';
    for (let i = 1; i <= linhas; i++) {
    
    asteriscos += '*';
    console.log(asteriscos);
    }
}