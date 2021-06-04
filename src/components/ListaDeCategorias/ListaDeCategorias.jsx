import { Component } from "react";
import "./estilo.css";


class ListaDeCategorias extends Component {
    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias__lista">
                    <li className="lista-categorias__item">Categoria</li>
                    <li className="lista-categorias__item">Categoria</li>
                    <li className="lista-categorias__item">Categoria</li>
                    <li className="lista-categorias__item">Categoria</li>
                </ul>
                <input type="text" className="lista-categorias__input"/>
            </section>
        );
    }
}

export default ListaDeCategorias;