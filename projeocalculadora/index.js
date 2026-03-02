function calcularTMB() {
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let sexo = document.getElementById("sexo").value

    let resultado = 0

    if(sexo == 'masculino') {
        resultado = (10 * peso) + (6.25 * altura) - (5 * idade) + 5  
    } else {
        resultado = (10 * peso) + (6.25 * altura) - (5 * idade) - 161
   }

   document.getElementById("resultado").innerHTML =
   "Sua TMB é aproximadamente " + resultado.toFixed(2) + " calorias por dia."
}