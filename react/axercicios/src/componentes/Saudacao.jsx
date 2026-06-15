import React, { Component} from "react";

export default class Saudacao extends Component {

    state = {
        tipo: "Fala",
        nome: "Pedro"
    }

    constructor(props) {
        super(props)

    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.props
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text"  placeholder="Tipo..." defaultValue={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." defaultValue={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}
