function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function preguntarIMC(){
    const peso = parseFloat(prompt("¿Cuál es tu peso?"))
    const altura = parseFloat(prompt("¿Cuál es tu altura?"))
    const IMC = calcularIMC(peso, altura)
    alert("Tu Indice de Masa Corporal es " + IMC)
}

preguntarIMC()

// console.log(calcularIMC(48, 1.65))