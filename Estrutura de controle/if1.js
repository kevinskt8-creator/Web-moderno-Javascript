function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com ", +nota);
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade..." + valor);
  }
}

seForVerdadeEuFalo();

// IF parte 2

function teste1(num2) {
  if (num2 > 7) console.log(num2);

  console.log("Final");
}

//teste1(6)
//teste1(8)

function teste2(num2) {
  if (num2 > 7);{ // Cuidado com o ';', não usar com as estruturas de controle
    console.log(num2);
  }
}

teste2(6)
teste2(8)


// If Else

const imprimirResultado = function(resultado) {
    if(resultado >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa')// Cuidado!!!
