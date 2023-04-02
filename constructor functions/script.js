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

//Construtor function:

//PascalCase: UmDoisTresQuatro
//camelCase: umDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular, //this: referenciando o objeto atual q vc esta atuando
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligação...");
    }
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular);


////

function Caderno(tamanhoFolha, numeroFolha, corCaderno){
    this.tamanhoFolha = tamanhoFolha,
    this.numeroFolha = numeroFolha,
    this.corCaderno = corCaderno,
    this.processoAbrir = function(){
        console.log("Escrevendo...");
    }
}

const caderno = new Caderno('7x7', 400, 'vermelho')
console.log(caderno);