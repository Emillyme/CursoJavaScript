//Mini projeto 7: MULTIPLO DE 3 E 5

// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

//até 10:

// multiplos de 3
// 3,6,9

//multiplos de 5
//5,10

// somando os multiplos

//como começar:
// - armazenar os multiplos de 3
// - armazenar os multiplos de 5
// - somar os dois

somar (10)
function somar(limite){
    let multiplo3 = 0;
    let multiplo5 = 0;

    for(i = 0; i <= limite; i++){
        if ( i % 3 === 0)
            multiplo3 += i;//ter colado "+=" inves de "=" faz com que inves de
                           //sobrecrever o valor, ele guarde e ainda o i continue sendo 0  
        if( i % 5 === 0)
            multiplo5 += i;
       
    }

    console.log(multiplo3 + multiplo5);
    
}
