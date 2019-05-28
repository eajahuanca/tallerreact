import React, { Component } from 'react';
import MenuPrincipal from './menu';
import Contador from './contador';

class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    generarAleatorio = () => {
        return Math.trunc(Math.random()*10);
    }

    render() { 
        return (
            <div>
                <MenuPrincipal/>
                <div className="container mt-4">
                    <div className="row mt2">
                        <div className="col-4">
                            <div><Contador valor={this.generarAleatorio()}/></div>
                        </div>
                        <div className="col-4">
                            <div><Contador valor={this.generarAleatorio()}/></div>
                        </div>
                        <div className="col-4">
                            <div><Contador valor={this.generarAleatorio()}/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Props;