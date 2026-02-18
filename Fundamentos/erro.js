function tratarErrorELancar(erro) {
    // throw new erro('...')
    // throw 10
    // throw true
    // throw 'mensagem
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!' )
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj )

// Throw: Lançar error em JS, qualquer msg de erro que fizer sentido
// Try: colcoar erros potencialmentes perigosos
// catch: Para tratar-lós