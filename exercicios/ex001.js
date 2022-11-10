let grade1 = 10;
let grade2 = 10;
let grade3 = 10;
let grade4 = 9

let finalResult = ''

finalResult = (grade1 + grade2 + grade3 + grade4) / 4;
if (finalResult === 10){
    console.log(`Parabens! você tirou ${finalResult} você é um pika das galaxias`)
} else if(finalResult >= 7 ){
    console.log(`Parabens! sua nota é de ${finalResult.toFixed(1)} passou de semestre`)
} else if (finalResult >= 5){
    console.log(`Cuidado! sua nota é ${finalResult.toFixed(1)} está de recuperação!`)
} else {
    console.log(`Que pena! sua nota é ${finalResult.toFixed(1)} Reprovado`)
}
