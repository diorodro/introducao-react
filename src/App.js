import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/'
import FormularioCadastro from './components/FormularioCadastro/'
import "./assets/App.css"
import './assets/index.css';


class App extends Component {
   render(){
    return (
        <div className="conteudo">
            <FormularioCadastro/>
            <ListaDeNotas/>
        </div>
    );
   }
}

export default App;