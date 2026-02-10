let vlaor;
// não inicializada
console.log(vlaor);

valor = null; //ausência de valor
console.log(valor);
// console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evitee atribuir undefined
console.log(!!produto.preco);
// delete produto.preco , forma de tirar um atributo
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);
