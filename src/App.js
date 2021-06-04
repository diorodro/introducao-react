import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/'
import FormularioCadastro from './components/FormularioCadastro/'
import "./assets/App.css"
import './assets/index.css';


class App extends Component {

    criarNota(titulo, texto){
        alert("uma nota foi criada: " + titulo + " " + texto)
    }

   render(){
    return (
        <div className="conteudo">
            <FormularioCadastro criarNota={this.criarNota}/>
            <ListaDeNotas/>
        </div>
    );
   }
}

export default App;