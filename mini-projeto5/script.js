//Mini projeto 5: PAR OU IMPAR

// Receber uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar

exibirTipo(10);
function exibirTipo(limite){
   while (limite >= 0){
        if (limite % 2 == 0){
            console.log(limite, 'PAR');
        }
        else{
            console.log(limite, 'IMPAR');
        }

        limite--;
   }
    
}

//com FOR:


// exibirTipo(10);
// function exibirTipo(limite){
//    for (let i = 0; i <= limite; i++){
//         if (i % 2 == 0){
//             console.log(i, 'PAR');
//         }
//         else{
//             console.log(i, 'IMPAR');
//         }
//    }
    
// }