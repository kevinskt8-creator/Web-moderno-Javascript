const sequencia = {
    _valor: 1, // convenção
    get _valor() { return this._valor++},
    set valor(valor) {
        if(valor > thid._valor) {
            this._valor = valor
        }
    }
}