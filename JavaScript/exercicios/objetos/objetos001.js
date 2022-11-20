/*  
    1 - Crie uma classe para representar carros.
    os carros possuem uma marca, cor, e um gasto médio de combustível por km rodado.
    crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais apra realizar o percurso
    */



class Carros{

    marca;
    cor;
    consumoMedioPorKm;
   

    constructor(marca, cor, consumoMedioPorKm,){
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
        

    }

    calcularGastoDoPercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.consumoMedioPorKm * precoCombustivel

    }


}

let chevete = new Carros('Chevrolet', 'Preto', 1/15)
let golf = new Carros('Volkswagen', 'Prata', 1/12,)

//chevete.calcularGastoDoPercurso(100, 5.09)

console.log(chevete.calcularGastoDoPercurso(350, 5.09))
console.log(golf.calcularGastoDoPercurso(350, 5.09))