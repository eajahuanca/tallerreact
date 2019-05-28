import React, { Component } from 'react';
import logo from '../images/logocognos.png';
import {Link} from 'react-router-dom';

class MenuPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <img src={logo} alt="Cognos"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Principal <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Enlace</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Conceptos
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/renderizado">Renderizado de elementos</Link>
                                <Link className="dropdown-item" to="/props">Componentes y props</Link>
                                <Link className="dropdown-item" to="/estados">Estado y ciclo de vida</Link>
                                <Link className="dropdown-item" to="/eventos">Eventos</Link>
                                <Link className="dropdown-item" to="/renderizado">Renderizado condicional</Link>
                                <Link className="dropdown-item" to="/listas">Lista y llaves</Link>
                                <Link className="dropdown-item" to="/formularios">Formulario</Link>
                                <Link className="dropdown-item" to="/juego">Juego de frutas</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Deshabilitado</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
         );
    }
}
 
export default MenuPrincipal;