const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulheresChinesas = funcionarios
        .filter(f => f.genero === 'F')
        .filter(f => f.pais === 'China')

    const mulherChinesaMenorSalario = mulheresChinesas.reduce((menor, atual) => {
        return atual.salario < menor.salario ? atual : menor
    })

    console.log(mulherChinesaMenorSalario)
})