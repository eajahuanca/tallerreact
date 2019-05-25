import React, { Component } from 'react';
import MenuPrincipal from './menu';

class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <MenuPrincipal/>
                props
            </div>
        );
    }
}
 
export default Props;