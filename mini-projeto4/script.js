//Mini projeto 4: Medidor de Velocidade

// Velocidade máxima de até 70 -> ok
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(90);

function verificarVelocidade(velocidade){

    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima){
        console.log('OK');
    }

    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto ));
        if(pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }

}
