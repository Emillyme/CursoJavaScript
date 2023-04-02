
const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo ligação...')
    }
}

//Factory Functions (função de fábrica)//
//ajuda em otimizar os códigos, deixar eles mais curtos

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular: marcaCelular,
        tamanhoTela: tamanhoTela,
        capacidadeBateria: capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }    

}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);

////////////

const roupa = {
    tamanhoRoupa: 40,
    tipoRoupa: 'calça',
    corRoupa: 'preta',
    tecidoRoupa: 'latex', 
}

//Fazendo factory function

function criarRoupa(tamanhoRoupa, tipoRoupa, corRoupa, tecidoRoupa){
    return {
        tamanhoRoupa,
        tipoRoupa,
        corRoupa,
        tecidoRoupa,
    }
}

const roupa1 = criarRoupa('GG', 'blusa', 'azul', 'lã');
const roupa2 = criarRoupa('P', 'casaco', 'branco', '');
const roupa3 = criarRoupa('M', 'regata', 'cinza', 'poliester');
console.log(roupa1);
console.log(roupa2);
console.log(roupa3);
