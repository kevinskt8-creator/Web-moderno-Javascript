const soma = function (x, y) {
  return x + y;
};

const imprimirREsultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirREsultado(3, 4);
imprimirREsultado(3 ,4, soma)
imprimirREsultado(3, 4, function (x, y) {
  return x- y
})


imprimirREsultado(3, 4, (x, y) => x * y )

const pessoa = {
  falar: function () {
    console.log('Opa')
  }
}