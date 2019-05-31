import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import pedidosJson from './pedidos.json';
import PedidoForm from './componentes/PedidoForm';
import Pedido from './componentes/Pedido';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pedidos: []
    }
  }

  componentWillMount() {
    this.setState({
      pedidos: pedidosJson
    })
  }

  deletePedido = (mesa) => {
    var nuevosPedidos = this.state.pedidos.filter((pedido) => { 
      return pedido.mesa !== mesa; 
    }); 
    this.setState({ pedidos: nuevosPedidos });
  }

  ingresarPedido = (pedido) => {
    this.setState({
      pedidos: [...this.state.pedidos, pedido]
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Pedidos
              <span className="badge badge-pill badge-light ml-2">
              {this.state.pedidos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <PedidoForm onIngresarPedido={this.ingresarPedido}></PedidoForm>
            </div>
            <div className="col-md-8">
              <div className="row">
                {
                  this.state.pedidos.map((pedido, index) => {
                    return (
                      <Pedido key={index} {...pedido} deletePedido={this.deletePedido} />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;