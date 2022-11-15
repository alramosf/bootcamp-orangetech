const entradas = [10, 11, 2, 22, 12, 54,53, 57,60,70,88,90,95];
let i = 0;

function gets(){
     const valor = entradas [i];
     i++;
     return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = {gets, print};