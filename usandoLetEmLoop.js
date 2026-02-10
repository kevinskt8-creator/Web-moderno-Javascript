for (let i = 0; i < 20; i++) {
    console.log(i)
}

console.log('i =', 1)


//usandoLetEmLoop2


const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)

    })
}

funcs[2]()
funcs[8]()
funcs[6]()