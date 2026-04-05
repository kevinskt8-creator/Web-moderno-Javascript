// Selecionar os elementos
const inputElement = document.querySelector("#input")
const ifromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const outputElement = document.querySelector("#output")
const convertButton = document.querySelector("#convert-btn")
const messagetElement = document.querySelector("#message")

// função para converter as unidades
function convert() {
    const fromValue = frameElement.value 
    const toValue = toElement.value

    if (fromValue === toValue) {
        outputElement.value = inputElement.value
        messagetElement.textContent = ""
        return;
    }
    // Converter a entrada para metros
    let meters;
    switch (fromValue) {
        case "m":
            meters = inputElement.value;
            break
        case "km":
            meters = inputElement.value * 1000
            break
        case "cm":
            meters = inputElement.value / 100
            break
        case "mm":
            meters = inputElement.value / 1000
            break
    }
// converter metros para unidade de saída
let result;
    switch (toValue) {
        case "m":
            result =  meters
            break
        case "km":
            result = meters / 1000
            break
        case "cm":
            result = meters * 100
            break
        case "mm":
           result =meters * 1000
            break
    }
// Exibir resultado no input
    outputElement.value = result

// Exibir resultado na mensagem
const fromLabel = fromElement.options[fromElement.selectedIndex].text
const toLabel = toElement.options[toElement.selectedIndex].text

const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`
messagetElement.textContent = message
return;
}

convertButton.addEventListener("click", convert)