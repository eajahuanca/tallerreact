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
                    </thead>
                    <tbody>
                        {
                            this.props.alumnos.map(alumno => (
                                <tr>
                                    <td>{alumno.nombres}</td>
                                    <td>{alumno.ci}</td>
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