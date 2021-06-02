import React, { Component } from 'react';
import CardNota from '../CardNota';
import "./estilo.css"

class ListaDeNotas extends Component {
    render() {
        return(
        <ul className="lista-notas">
            {Array.of("Trabalho", "Trabalho", "Ensino").map((categoria,index) => {
           return (
               <li className="lista-notas__items" key={index}>
                   <CardNota/>
               </li>
           );
        })}</ul>);
    }
}

export default ListaDeNotas;