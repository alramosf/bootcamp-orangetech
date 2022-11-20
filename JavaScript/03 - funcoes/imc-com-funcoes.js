

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2)
}



function classificarImc(imc) {
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

function main(){
    
    let peso = 120
    let altura = 1.80
    
    let imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

}

main();