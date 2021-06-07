import React, { Component } from 'react';
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem Categoria";
    }

    _handleMudançaTitulo(evento) {
        this.titulo = evento.target.value;
        evento.stopPropagation();

    }

    _handleMudancaTexto(evento) {
        this.texto = evento.target.value;
        evento.stopPropagation();

    }

    _handleMudancaCategoria(evento){
        this.categoria = evento.target.value;
        evento.stopPropagation();
    }

    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >

                <select
                onChange={this._handleMudancaCategoria.bind(this)}
                    className="form-cadastro__input"
                >
                    <option>Sem Categoria</option>
                    {this.props.categorias.map((categoria, index) => {
                        return (
                            <option key="index">{categoria}</option>
                        )
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro__input"
                    onChange={this._handleMudançaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    cols={50}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro__input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro__input form-cadastro__submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;