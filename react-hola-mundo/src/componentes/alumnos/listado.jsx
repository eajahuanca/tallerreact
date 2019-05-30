import React, { Component } from 'react';

class Listado extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <table className="table">
                    <thead>
                        <th scope='col'>Nombres</th>
                        <th scope='col'>CI</th>
                        <th scope='col'></th>
                    </thead>
                    <tbody>
                        {
                            this.props.alumnos.map(alumno => (
                                <tr key={alumno.ci}>
                                    <td>{alumno.nombres}</td>
                                    <td>{alumno.ci}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={(e) => this.props.onEliminar(e, alumno.ci)}>x</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
         );
    }
}

export default Listado;