import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro/';
import ListaDeCategorias from './components/ListaDeCategorias/';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';
import "./assets/App.css";
import './assets/index.css';


class App extends Component {

    constructor() {
        super();
        this.categorias = new Categorias();
        this.notas = new ArrayDeNotas();
    }

    render() {
        return (
            <div className="conteudo">
                <FormularioCadastro
                    categorias={this.categorias.categorias}
                    criarNota={this.notas.adicionarNota.bind(this)}
                />
                <main className="conteudo-principal">
                    <ListaDeCategorias
                        adicionarCategoria={this.categorias.adicionarCategoria.bind(this)}
                        categorias={this.categorias.categorias}
                    />
                    <ListaDeNotas
                        apagarNota={this.notas.apagarNota.bind(this)}
                        notas={this.notas.notas}
                    />
                </main>
            </div>
        );
    }
}

export default App;