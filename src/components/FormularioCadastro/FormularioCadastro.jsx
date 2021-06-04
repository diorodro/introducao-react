import React, { Component } from 'react';
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor() {
        super();
        this.titulo = "";
        this.texto = "";
    }

    handleMudançaTitulo(evento) {
        this.titulo = evento.target.value;
    }

    handleMudancaTexto(evento){
        this.titulo = evento.target.value;
    }

    criarNota(evento){
        alert(`uma nova nota foi criada {this.titulo} {this.texto}`)
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this.criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro__input"
                    onChange={this.handleMudançaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    cols={50}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro__input"
                    onChange={this.handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro__input form-cadastro__submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;