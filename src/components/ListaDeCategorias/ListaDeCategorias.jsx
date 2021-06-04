import { Component } from "react";
import "./estilo.css";


class ListaDeCategorias extends Component {

    _handleEventoInput(evento){
        if (evento.key === "Enter") {
            let valorCategoria = evento.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias__lista">
                    {this.props.categorias.map((categoria, index) => {
                        return(<li key={index} className="lista-categorias__item">{categoria}</li>);
                    })}
                    
                </ul>
                <input
                    type="text"
                    className="lista-categorias__input"
                    placeholder="Adicionar Categoria..."
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;