import React, { Component } from 'react';
import Frutas from './frutas'
class Juego extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoBoton:'Intenta de Nuevo',
            pos1:1,
            pos2:2,
            pos3:3
          }
    }
    generarAleatorio = () => {
        return Math.trunc(Math.random() * 7) + 1
    }

    generar = () => {
        this.setState({
            pos1: this.generarAleatorio(),
            pos2: this.generarAleatorio(),
            pos3: this.generarAleatorio()
        })
        var v1 = this.state.pos1;
        var v2 = this.state.pos2;
        var v3 = this.state.pos3;

        if (v1 === v2){
            if(v1 === v3)
            {
                this.setState({
                    textoBoton: 'Gano !!!'
                })
            }else{
                this.setState({
                    textoBoton: 'Intenta de Nuevo'
                })
            }
        }else{
            this.setState({
                textoBoton: 'Intenta de Nuevo'
            })
        }
    }

    render() { 
        return ( 
            <div>
                <div className="container mt-4">
                    <h1 className="text-center">Juego de frutas</h1>
                    <div className="row text-center">
                        <div className="col-4"><Frutas position={this.state.pos1}/></div>
                        <div className="col-4"><Frutas position={this.state.pos2}/></div>
                        <div className="col-4"><Frutas position={this.state.pos3}/></div>
                    </div>
                    <div className="row mt-2 text-center">
                        <div className="col-12">
                            <button className="btn btn-primary btn-block" onClick={this.generar}>
                                Jugar
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-2 text-center">
                            {this.state.textoBoton}
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Juego;