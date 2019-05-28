import React, { Component } from 'react';
import Cereza from '../images/cereza.png';
import Frambuesa from '../images/frambuesa.png';
import Frutilla from '../images/frutilla.png';
import Manzana from '../images/manzana.png';
import Naranja from '../images/naranja.png';
import Pinia from '../images/pinia.png';
import Sandia from '../images/sandia.png';
import Uva from '../images/uva.png';

class Frutas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            frutasarray:[
                Cereza,
                Frambuesa,
                Frutilla,
                Manzana,
                Naranja,
                Pinia,
                Sandia,
                Uva
            ]
         }
    }
    render() { 
        return ( 
            <div>
                <div>
                    <img src={this.state.frutasarray[this.props.position]}/>
                </div>
            </div>
         );
    }
}
 
export default Frutas;