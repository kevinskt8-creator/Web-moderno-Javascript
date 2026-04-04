// Removida a importação do lodash que não estava sendo usada
const assuntosEcma = ['Map', 'Set', 'Promise']; // Definição necessária

// Iterando sobre String
for (let letra of "Cod3r") {
  console.log(letra);
}

// for...in retorna as CHAVES/ÍNDICES (0, 1, 2)
for (let i in assuntosEcma) {
  console.log(i);
}

// for...of retorna os VALORES
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

// CORREÇÃO: Map com "M" maiúsculo
const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

// O for...of em um Map retorna um array [chave, valor] por padrão
for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

// Destructuring para pegar chave e valor separadamente
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

// Uso do Set nativo (sem relação com o lodash lá de cima)
const s = new Set(['a', 'b', 'c']);
for (let letra of s) {
    console.log(letra);
}