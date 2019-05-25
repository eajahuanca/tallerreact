import React, { Component } from 'react';
import MenuPrincipal from './menu';

class Listas extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <MenuPrincipal/>
                listas
            </div>
          );
    }
}
 
export default Listas;