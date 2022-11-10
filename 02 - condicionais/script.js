function calculate(){
    let fuelPriceGas = document.getElementById('fuelTypeGas').value;
    let fuelPriceAlcohol = document.getElementById('fuelTypeAlcohol').value;
    let kmForLiterGas = document.getElementById('kmForLiter').value;
    //let kmForLiterAlcohol = 9;
    let distanceKm = document.getElementById('tripDistance').value;
    //let tripPrice = '';
    let fuelType = document.getElementById('fuelType').value;
    let answer = ''
    if(fuelType == 'Gasolina'){
        answer.innerHTML = ``
    }
}


//if(fuelType == 'Gasolina'){
  //  tripPrice = (distanceKm / kmForLiterGas) * fuelPriceGas;
    //console.log(`O Valor gasto na viagem com Gasolina foi de R$${tripPrice.toFixed(2)}`)
//} else {
  //  tripPrice = (distanceKm / kmForLiterAlcohol * fuelPriceAlcohol);
    //console.log(`O Valor gasto na viagem com Alcool foi de R$${tripPrice.toFixed(2)}`)
//}
