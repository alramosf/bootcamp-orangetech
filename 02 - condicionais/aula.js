

let numero = 5;
let numeroPar = (numero % 2) === 0;

if (numero === 0){
    console.log('Invalido')
} else if (numeroPar === true) {
    console.log('Este número é par')
} else {
    console.log('Este número é impar!')
}