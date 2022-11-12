/*fazer calculo de desconto por condição de pagamento*/

/*codigo de condição

a vista debito 10% desconto
a vista no dinheiro ou pix, 15% de desconto
em duas vezes, preço normal sem juros
acima de duas vezes, preço normal mais 10% de juros*/


//var salario = 1000;
//var percentual = 0.07;
//var aumento = salario * percentual;
//var novo_salario = salario + aumento;

//alert(novo_salario)

let price = 875 ;
let debtDiscount = 0.1
let moneyPix = 0.15
let valueWithFees = -0.1
const valueNoDiscount = price

let valueCalcDebt = price * debtDiscount 
let valueCalcMoneyPix = price * moneyPix
let valueCalcNoDiscount = price
let valueCalcWithFees = price * valueWithFees

let paymentMethod = 'other'
//let finalPrice = ''
//console.log(price - valueCalcWithFees)

if(paymentMethod === 'debit' ){
    finalPrice = price - valueCalcDebt
    console.log(finalPrice)
} else if(paymentMethod === 'pix'){
    finalPrice = price - valueCalcMoneyPix
    console.log (finalPrice)
} else if (paymentMethod === 'twotimes') {
    finalPrice = valueCalcNoDiscount
    console.log (finalPrice)
} else{
    finalPrice =  price - valueCalcWithFees
    console.log (finalPrice)
}