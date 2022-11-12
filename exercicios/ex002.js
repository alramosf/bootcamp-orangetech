/*Formula do IMC:
IMC = peso / (algura * altura)

Elabore um algoritimo dado o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.

IMG condição
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal
- Entre 25 e 30 Acima do peso ;
- entre 30 e 40 obeso;
- acima de 40 obesidade grave */

let peso = 140
let altura = 1.80

let imc = peso / (altura * altura)


if (imc < 18.5) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} você está abaixo do peso.`)
} else if (imc > 18.5 &&  imc <= 25) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} está com o peso ideal.`)
} else if (imc >25 && imc <= 30) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} você está acima do peso`)
} else if (imc > 30 && imc <= 40) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} você está obeso.`)
} else {
    console.log(`Seu IMC é de ${imc.toFixed(2)} você está com grave obesidade`)
}