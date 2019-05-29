import React, { Component } from 'react';
import MenuPrincipal from './menu';

class Ciclos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paises: []
        }
    }

    componentWillMount = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                return response.json()
            }).then((art) => this.setState({
                paises: art
            }));
    }

    render() {
        return (
            <div>
                <MenuPrincipal />
                <div className="container mt-4">

                    <div className="row form-group">
                        <div className="col-md-6">
                            <input type="search" name="txtbuscar" placeholder="Buscar" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <button type="button" className="btn btn-primary">Buscar</button>
                        </div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Capital</th>
                                <th>Region</th>
                                <th>Poblacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.paises.map(pais => {
                                    return (
                                        <tr key={pais.name}>
                                            <td>{pais.name}</td>
                                            <td>{pais.capital}</td>
                                            <td>{pais.region}</td>
                                            <td align="right">{pais.population}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Ciclos;