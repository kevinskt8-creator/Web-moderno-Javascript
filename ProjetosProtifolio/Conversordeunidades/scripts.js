// Selecionar os elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// função para converter as unidades
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if (isNaN(parseFloat(inputElement.value))) {
        messageElement.textContent = "Digite um valor válido.";
        outputElement.value = "";
        return;
    }

    // Converter a entrada para metros
    let meters;
    switch (fromValue) {
        case "m":
            meters = parseFloat(inputElement.value);
            break;
        case "km":
            meters = parseFloat(inputElement.value) * 1000;
            break;
        case "cm":
            meters = parseFloat(inputElement.value) / 100;
            break;
        case "mm":
            meters = parseFloat(inputElement.value) / 1000;
            break;
    }

    // Converter metros para unidade de saída
    let result;
    switch (toValue) {
        case "m":
            result = meters;
            break;
        case "km":
            result = meters / 1000;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "mm":
            result = meters * 1000;
            break;
    }

    // Exibir resultado no input
    outputElement.value = result;

    // Exibir resultado na mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
}

convertButton.addEventListener("click", convert);