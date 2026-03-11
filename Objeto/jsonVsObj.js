const obj = { a: 1, b: 2, C: 3, soma() {return this.a + b + this.C}}
console.log(JSON.stringify(obj))

// console.log(JSOON.parse("{ a: 1, B: 2, C: 3 }"))
//onsole.log(JSOON.parse("{ 'a': 1, 'B': 2, 'C': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": []}'))