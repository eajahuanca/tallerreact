import React, { Component } from 'react';
import MenuPrincipal from './menu';
import Registro from './alumnos/registro';
import Listado from './alumnos/listado';

class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            alumnos:[]
        }
    }

    registro = (event) => {
        event.preventDefault();
        const nombres = event.target.nombres.value;
        const ci = event.target.ci.value;
        const alumnoNuevo = {nombres, ci};
        this.setState({
            alumnos: [...this.state.alumnos, alumnoNuevo]
        })

        event.target.nombres.value = '';
        event.target.ci.value = '';
    }

    eliminar = (e, elementoCi) => {
        e.preventDefault();
        const alumnosNuevos = this.state.alumnos.filter(element => element.ci !== elementoCi)
        this.setState({
            alumnos: alumnosNuevos
        })
    }

    render() { 
        return ( 
            <div>
                <MenuPrincipal/>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <Registro onRegistro={this.registro}/>
                        </div>
                        <div className="col-md-6">
                            <Listado alumnos={this.state.alumnos} onEliminar={this.eliminar}/>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Eventos;