import React, { Component } from 'react';

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <form onSubmit={this.props.onRegistro}>
                    <div className="form-group">
                        <label for="nombres">Nombres</label>
                        <input type="text" name="nombres" className="form-control" placeholder="ingrese nombre"/>
                    </div>
                    <div className="form-group">
                        <label for="ci">CI</label>
                        <input type="text" name="ci" className="form-control" placeholder="ingrese ci"/>
                    </div>
                    <button className="btn btn-primary" type="submit">Registro</button>
                </form>
            </div>
        );
    }
}
 
export default Registro;
