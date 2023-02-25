//If..Else
//como fazer um if..else: 
/*

if (condicao){
     - código a ser executado
}

//se quiser fazer outro if:
else if (outraCondicao){
     - código a ser executado
}

//else = "caso contrario"
else{
     -código a ser executado
}

*/

//----------------------------------------------------
//Se a hora estiver entre 06:00 até 12:00 = Bom dia!
//Se estiver entre 12:00 até 18:00 = Boa Tarde!
//Caso contrario = Boa noite!

let hora = 17;

if (hora > 6 && hora < 12){
    console.log("Bom dia!");
}

//se quiser fazer outro if:
else if (hora > 12 && hora < 18){
    console.log("Boa tarde!");
}

//else = "caso contrario"
else{
    console.log("Boa noite!");
}




