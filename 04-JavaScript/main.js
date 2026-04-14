function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function preguntarIMC(){
    const peso = parseFloat(prompt("¿Cuál es tu peso?"))
    const altura = parseFloat(prompt("¿Cuál es tu altura?"))
    const IMC = calcularIMC(peso, altura)

    var categoria = ""
    if (IMC < 18.5) categoria = "Peso Bajo"
    else if (IMC < 25) categoria = "Peso Normal"
    else if (IMC < 30) categoria = "Sobrepeso"
    else categoria = "Obesidad"
    alert("Tu Indice de Masa Corporal es " + IMC + " estas con " + categoria)
}

preguntarIMC()

// console.log(calcularIMC(48, 1.65))