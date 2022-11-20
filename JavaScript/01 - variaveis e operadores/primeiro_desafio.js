/*fazer um programa para calcular o valor gasto de combustível em uma viagem.

você terá três variáveis. Sendo elas:

1 - Preço do combustível
2 - Valor médio de gasto pelo carro;
3 - Distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar está viagem.
*/


let fuelPrice = 5.09;
let kmForLiter = 14;
let distanceKm = 1328;
let tripPrice = '';

tripPrice = (distanceKm / kmForLiter) * fuelPrice;

console.log(`O Valor gasto na viagem com combustivel foi de R$${tripPrice.toFixed(2)}reais`);


//toFixed() converte para texto e dentro do parenteses escolhe a quantidade de codigos da casa decimal.
