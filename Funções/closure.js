// Closure é o escopo criando quando uma função é declarada/ escopo que envolve a função
// Esse escopo permite a funçaõ acessar e manipular variáveis externas à função= 'Local

// Contexto léxico em ação!

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao())
