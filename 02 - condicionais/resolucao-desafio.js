/*fazer um programa para calcular o valor gasto de combustível em uma viagem.

você terá cinco variáveis. Sendo elas:

1 - Preço do etanol
2 - Preço da Gasolina
3 - O Tipo de combustível que está no seu carro
4 - Valor médio de gasto pelo carro;
3 - Distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar está viagem.
*/

/*let fuelPriceGas = 5.09;
let fuelPriceAlcohol = 3.79;
let kmForLiterGas = 14;
let kmForLiterAlcohol = 8;
let distanceKm = 1500;
let tripPriceGas = '';
let tripPriceAlcohol = '';

tripPriceGas = (distanceKm / kmForLiterGas) * fuelPriceGas;
tripPriceAlcohol = (distanceKm / kmForLiterAlcohol) * fuelPriceAlcohol;

console.log(`O Valor gasto na viagem com Gasolina foi de R$${tripPriceGas.toFixed(2)}`);
console.log(`O Valor gasto na viagem com Alcool foi de R$${tripPriceAlcohol.toFixed(2)}`);
*/

let fuelPriceGas = 5.09;
let fuelPriceAlcohol = 3.79;
let kmForLiterGas = 14;
let kmForLiterAlcohol = 9;
let distanceKm = 100;
let tripPrice = '';
let fuelType = 'Alcool';

//tripPrice = (distanceKm / kmForLiter) * fuelPriceGas;

if(fuelType == 'Gasolina'){
    tripPrice = (distanceKm / kmForLiterGas) * fuelPriceGas;
    console.log(`O Valor gasto na viagem com Gasolina foi de R$${tripPrice.toFixed(2)}`)
} else {
    tripPrice = (distanceKm / kmForLiterAlcohol * fuelPriceAlcohol);
    console.log(`O Valor gasto na viagem com Alcool foi de R$${tripPrice.toFixed(2)}`)
}
