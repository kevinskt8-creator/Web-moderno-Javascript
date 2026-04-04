const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

// console.log(tecnologias.react); // Errado: Map não aceita acesso por ponto
console.log(tecnologias.get('react').framework); // Correto: false

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'], // Adicionada a vírgula aqui
    [123, 'Número']
]);

// Corrigido parênteses e sintaxe da Arrow Function
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
});

console.log(chavesVariadas.has(123)); // true
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123)); // false
console.log(chavesVariadas.size);     // 2

// O Map não aceita chaves duplicadas. 
// Cada 'set' abaixo sobrescreve o valor anterior da chave 123.
chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');
chavesVariadas.set(123, 'ab'); 

console.log(chavesVariadas); // O valor final para a chave 123 será 'ab'

