//SWITCH .. CASE

//Como montar switch..case
/*

switch(variavel) {
    case ''
    break;
}

*/

//

let permissao; // comum, gerente, diretor
permissao = 'gerente';

switch(permissao) {
 
    case 'comum': 
    console.log('Usuário comum');
    break;

    case 'gerente': 
    console.log('Usuário gerente');
    break;

    case 'diretor': 
    console.log('Usuário diretor');
    break;

    default:
    console.log('Usuário não reconhecido!')

}