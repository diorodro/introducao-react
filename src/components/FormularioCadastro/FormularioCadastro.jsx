import React, { Component } from 'react';
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(){
        super();
        this.titulo="";
    }

    handleMudançaTitulo(evento){
        this.titulo = evento.target.value;
    }

    render() {
        return (
            <form className="form-cadastro">
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro__input"
                    onChange={this.handleMudançaTitulo.bind(this)}
                />
                <textarea rows={15} cols={50} placeholder="Escreva sua nota..." className="form-cadastro__input" />
                <button className="form-cadastro__input form-cadastro__submit"> Criar Nota </button>
            </form>
        );
    }
}

export default FormularioCadastro;