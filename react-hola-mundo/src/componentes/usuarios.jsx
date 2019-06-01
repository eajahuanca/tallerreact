import React, { Component } from 'react';
import MenuPrincipal from './menu';
import axios from 'axios';

class Usuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            usuario: {},
            id: '',
            login: '',
            nombreCompleto: '',
            email: '',
            password:'',
            boton: 'GUARDAR'
        }
    }

    componentDidMount() {
        axios.get('http://192.168.2.151:5000/api-cognos/usuarios/')
            .then(res => {
                const usuarios = res.data;
                this.setState({ usuarios });
            })
    }


    registro = (e) => {
        e.preventDefault();
        if (this.state.login && this.state.nombreCompleto && this.state.email && this.state.password) {
            if (this.state.boton === 'GUARDAR') {
                const usuario = {
                    id: this.state.usuarios.length + 1,
                    login: this.state.login,
                    nombreCompleto: this.state.nombreCompleto,
                    email: this.state.email,
                    password: this.state.password
                }

                axios.post('http://192.168.2.151:5000/api-cognos/usuarios', usuario)
                    .then(res => {
                        this.setState({ usuarios: [...this.state.usuarios, usuario] })
                    });
            } else {
                const id = this.state.id
                const usuario = {
                    login: this.state.login,
                    nombreCompleto: this.state.nombreCompleto,
                    email: this.state.email,
                    password: this.state.password
                }
                axios.put(`http://192.168.2.151:5000/api-cognos/usuarios/${id}`, usuario)
                    .then(res => {
                        const usuarios = [];
                        console.log(id);
                        this.state.usuarios.map((usuarioMap) => {
                            if(usuarioMap.id === id){
                                usuarios.push(usuario)
                            }else{
                                usuarios.push(usuarioMap)
                            }
                        });
                        this.setState({
                            usuarios:usuarios
                        })
                    });
            }
        }
    }

    remover = (id) => {
        axios.delete(`http://192.168.2.151:5000/api-cognos/usuarios/${id}`)
            .then(res => {
                const usuariosFiltro = this.state.usuarios.filter((usuario) => {
                    return usuario.id !== id;
                });
                this.setState({ usuarios: usuariosFiltro });
            })
    }

    editar = (e, id) => {
        axios.get(`http://192.168.2.151:5000/api-cognos/usuarios/${id}`)
            .then(res => {
                const usuarios = res.data;
                this.setState({
                    id: usuarios.datos[0].id,
                    login: usuarios.datos[0].login,
                    nombreCompleto: usuarios.datos[0].nombreCompleto,
                    email: usuarios.datos[0].email,
                    password: usuarios.datos[0].password,
                    boton: 'EDITAR'
                })
            })
    }

    handleChange = (e) => { 
        const { value, name } = e.target;  
        this.setState({ [name]: value }); 
    }

    render() {
        return (
            <div>
                <MenuPrincipal />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-4">
                            <form onSubmit={this.registro}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="login" placeholder="Login" value={this.state.login} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password"  value={this.state.password} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="nombreCompleto" placeholder="Nombres Completo" value={this.state.nombreCompleto} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary" >{this.state.boton}</button>
                            </form>
                        </div>
                        <div className="col-8">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Usuario</th>
                                        <th>Nombre Completo</th>
                                        <th>Email</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.usuarios.map((usuario, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{usuario.id}</td>
                                                <td>{usuario.login}</td>
                                                <td>{usuario.nombreCompleto}</td>
                                                <td>{usuario.email}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() =>
                                                        this.remover(usuario.id)} >Borrar</button>
                                                </td>
                                                <td>
                                                    <button className="btn btn-warning" onClick={() =>
                                                        this.editar(this, usuario.id)} >Editar</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );

    }



}

export default Usuarios; 