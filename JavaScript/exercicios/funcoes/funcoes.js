function escrevaMeuNome (nome){
    return (`Seu nome é ${nome}`);
}


function suaIdade(idade){
    if(idade >= 18){
        return(`, sua idade é de ${idade} anos você é maior de idade`)
    } else {
        return(`, sua idade é de ${idade} anos você não é maior de idade`)
    }

}
    
    

function main(){

    let nome = 'Alexandre'
    let idade = 17

    console.log(escrevaMeuNome(nome) + suaIdade(idade))

}

main()
