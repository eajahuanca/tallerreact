import React, { Component } from 'react';
import MenuPrincipal from './menu'

class Renderizado extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    aleatorio = () => {
        return Math.trunc(Math.random() * 10);
    }

    render() {
        const alumno = {
            id: 1,
            nombres: 'Edwin',
            apellidos: 'Ajahuanca Callisaya'
        }
        return (
            <div>
                <MenuPrincipal />
                <div className="container">
                    <h1 className="btn btn-success mt-4">Titulo</h1>
                    <hr />
                    <p>Contenido del titulo , codigo JSX</p>
                    <p>Calnulando 2018 + 1: {2018 + 1}</p>
                    <p>Alumno: {alumno.nombres} {alumno.apellidos}</p>
                    <p>Numnero de la suerte: {this.aleatorio()}</p>
                    <p>La hora es: {new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        );
    }
}

export default Renderizado;