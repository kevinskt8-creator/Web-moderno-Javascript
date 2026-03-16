const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // "pop" Retira último elemento do array
console.log(pilotos);

pilotos.push("Vertappen"); // "Push" adc elemento  no ultimo lugar no array
console.log(pilotos);

pilotos.shift(); //  "shifit" remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton");
console.log(pilotos);

//splice pode adcicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//remover
pilotos.splice(3, 1); // massa quebrou
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
