import React, { Component } from 'react';
import MenuPrincipal from './menu';

class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <MenuPrincipal/>
                eventos
            </div>
         );
    }
}
 
export default Eventos;