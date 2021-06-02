import React, { Component } from 'react';
import './estilo.css';

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota__cabecalho">
                    <h3 className="card-nota__titulo">Título</h3>
                </header>
                <p className="card-nota__texto">Escreva Sua Nota:</p>
            </section>
        );
    }
}

export default CardNota;