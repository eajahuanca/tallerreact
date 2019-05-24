import React, { Component } from 'react';
import logo from '../images/logocognos.png';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                            <a className="nav-link" href="#">Principal <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Enlace</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Conceptos
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Renderizado de elementos</a>
                                <a className="dropdown-item" href="#">Componentes y props</a>
                                <a className="dropdown-item" href="#">Estado y ciclo de vida</a>
                                <a className="dropdown-item" href="#">Eventos</a>
                                <a className="dropdown-item" href="#">Renderizado condicional</a>
                                <a className="dropdown-item" href="#">Lista y llaves</a>
                                <a className="dropdown-item" href="#">Formulario</a>
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

export default Principal;