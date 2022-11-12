/*fazer calculo de desconto por condição de pagamento*/

/*codigo de condição

a vista debito 10% desconto
a vista no dinheiro ou pix, 15% de desconto
em duas vezes, preço normal sem juros
acima de duas vezes, preço normal mais 10% de juros*/

let price = 875 ;
let debtDiscount = 0.1
let moneyPix = 0.15
const valueNoDiscount = 0
let valueCalcDebt = price * debtDiscount
let valueCalcMoneyPix = price * moneyPix
let valueCalc
let valueWithFees = -0.1

console.log(price - valueCalcDebt)






//var salario = 1000;
//var percentual = 0.07;
//var aumento = salario * percentual;
//var novo_salario = salario + aumento;

//alert(novo_salario)