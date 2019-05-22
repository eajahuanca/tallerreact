import React, {Component} from 'react'

class Frm extends Component{
    constructor(props){
        super(props);
    }

    multiplicar = (evento) => {
        evento.preventDefault();
        var v1 = parseInt(evento.target.valor1.value, 10);
        var v2 = v1 * 1000;
        alert(`el calulo es: ${v1} * 1000 = ${v2}, su factorial es: ${this.factorial(v1)}`);
    }

    factorial = (num) => {
        if(num===0)
            return 1;
        return this.factorial(num-1) * num;
    }

    render(){
        return (
            <div>
                <form onSubmit={this.multiplicar}>
                    <p><input name="valor1" type="text"/></p>
                    <p><input value="Calcular" type="submit"/></p>
                </form>
            </div>
        )
    }
}

export default Frm;