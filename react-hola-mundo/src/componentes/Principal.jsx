import React, { Component } from 'react';
import MenuPrincipal from './menu';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <MenuPrincipal />
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4 mt-4 block">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Declarativo</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.</p>
                                    <p className="card-text">Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 block">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Aprende una vez, escribiendo donde sea</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.</p>
                                    <p className="card-text">Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 block">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Revisión de documentos</h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">En React no dejamos fuera al resto de tus herramientas tecnológicas, así que podrás desarrollar nuevas características sin necesidad de volver a escribir el código existente.</p>
                                    <p className="card-text">React puede también renderizar desde el servidor usando Node, así como potencializar aplicaciones móviles usando React Native.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Principal;