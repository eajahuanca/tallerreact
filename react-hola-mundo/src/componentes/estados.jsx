import React, { Component } from 'react';
import MenuPrincipal from './menu';

class Estados extends Component {
    constructor(props) {
        super(props);
        this.state = { contador:0 }
    }

    incrementar = () => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    decrementar = () => {
        this.setState({
            contador: this.state.contador -1,
        });
    }

    render() {
        return ( 
            <div>
                <MenuPrincipal/>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <h1>{this.state.contador}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary" onClick={this.incrementar}>Incrementar</button>
                                <button className="btn btn-danger ml-2" onClick={this.decrementar}>Decrementar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Estados;