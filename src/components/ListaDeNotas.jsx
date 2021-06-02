import React, { Component } from 'react';
import CardNota from './CardNota';

class ListaDeNotas extends Component {
    render() {
        return(
        <ul>{Array.of("Trabalho", "Trabalho", "Ensino").map((categoria,index) => {
           return (
               <li key={index}>
                   <p>{categoria}</p>
                   <CardNota/>
               </li>
           );
        })}</ul>);
    }
}

export default ListaDeNotas;