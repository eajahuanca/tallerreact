import React, { Component } from 'react';
import MenuPrincipal from './menu';

class Estados extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <MenuPrincipal/>
                estados
            </div>
         );
    }
}
 
export default Estados;