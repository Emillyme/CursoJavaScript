//Mini projeto 8: Média Escolar
//Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(media){
    let soma = 0;  
    
    for(var i = 0; i < array.length; i++ ){
        soma += array[i];
    }

    media = soma / (array.length);
// poderiamos separar essa conta da média em uma só função tbm


    //Maneira mais CLEAN
    if (media < 59 ) return 'F';
    if (media < 69 ) return 'D';
    if (media < 79 ) return 'C';
    if (media < 89 ) return 'B';
    return 'A'
    

    //MANEIRA COM IF ELSE
    // if( media >= 0 && media <= 59){
    //     console.log('F');
    // }
    // else if(media >= 60 && media <= 69){
    //     console.log('D');
    // }
    // else if( media >= 70 && media <= 79){
    //     console.log('C');
    // }
    // else if( media >= 80 && media <= 89){
    //     console.log('B');
    // }
    // else if( media >= 90 && media <= 100){
    //     console.log('A');
    // }


}

