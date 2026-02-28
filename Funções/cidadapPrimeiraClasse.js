// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function func1() { }

// Amarzenar em uma variável
const fun2 = function () { }

// Amarzenar em um array
const array = [function (a, b) {return a + b}, func1 , fun2]

// Amarzenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/ conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)