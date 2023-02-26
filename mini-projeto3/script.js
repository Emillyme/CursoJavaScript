//Mini projeto 3: fizzBuzz
// O QUE É fizzBuzz: O fizzBuzz ele vai comparar alguns valores e ter 
//algum tipo de retorno baseando no tipo de entrada colocada.


//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FiZzBuzz
//Não divisível por 3 ou 5 => entrada
//Se não for um numero => "não é um número"

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
    return 'Não é um número';

    else if (entrada % 3 === 0 && entrada % 5 ===0)
    return 'fizzBuzz';

    else if (entrada % 3 === 0)
    return 'Fizz';

    else if (entrada % 5 === 0)
    return 'Buzz';

    else return (entrada);
}