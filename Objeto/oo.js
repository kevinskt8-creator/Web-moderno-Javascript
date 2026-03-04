// CÓDIGO NÃO EXECUTÁVEL!!

// Procedural
//processamento(valor1, valor2, valor3)

// OO
//objeto = {
//valor1,
//valor2,
//valor3,
//processamento()
// ...

//objeto.processamento()

// Coleção dinâmica de pares chave/valor

const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Generica";
produto.preco = 330;
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  propietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua ABC",
      numero: 34,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],
  calcularValorSeguro: function () {
    //...
  },
};

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"];
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
