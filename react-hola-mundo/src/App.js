import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Principal from './componentes/Principal';
import Login from './componentes/login';
import Registro from './componentes/registro';
import Renderizado from './componentes/renderizado';
import Props from './componentes/props';
import Condicional from './componentes/condicional';
import Estados from './componentes/estados';
import Eventos from './componentes/eventos';
import Formularios from './componentes/formularios';
import Listas from './componentes/listas';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Principal}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/renderizado" component={Renderizado}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/props" component={Props}/>
        <Route exact path="/condiconal" component={Condicional}/>
        <Route exact path="/estados" component={Estados}/>
        <Route exact path="/eventos" component={Eventos}/>
        <Route exact path="/formularios" component={Formularios}/>
        <Route exact path="/listas" component={Listas}/>
      </Switch>
    </Router>
    
  );
}

export default App;
