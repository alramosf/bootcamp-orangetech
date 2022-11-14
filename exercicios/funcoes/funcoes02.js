



let precoEtiqueta = 100
let formaDePagamento = 4

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)))
    
}

function aplicarJuros(valor, desconto){
    return (valor + (valor * (desconto / 100)))
}

    if (formaDePagamento === 1 ) {
        console.log (aplicarDesconto(precoEtiqueta, 10))
    } else if (formaDePagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15))
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta)
    } else {
        console.log (aplicarJuros (precoEtiqueta, 10))
    }

    