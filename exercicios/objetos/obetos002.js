class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
       return this.peso / (this.altura * this.altura)
    }
    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return (`Seu IMC é de ${imc.toFixed(2)} você está abaixo do peso.`)
        } else if (imc > 18.5 &&  imc <= 25) {
            return (`Seu IMC é de ${imc.toFixed(2)} está com o peso ideal.`)
        } else if (imc >25 && imc <= 30) {
            return (`Seu IMC é de ${imc.toFixed(2)} você está acima do peso`)
        } else if (imc > 30 && imc <= 40) {
            return (`Seu IMC é de ${imc.toFixed(2)} você está obeso.`)
        } else {
            return (`Seu IMC é de ${imc.toFixed(2)} você está com grave obesidade`)
        }
    }
}

let alexandre = new Pessoa('Alexandre', 120, 1.77)
let jose = new Pessoa('Jose', 70, 1.75)

console.log(alexandre.classificarImc()); 
console.log(jose.classificarImc()); 