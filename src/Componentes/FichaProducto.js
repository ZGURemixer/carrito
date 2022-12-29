import React from 'react';
import {Button} from 'reactstrap';

class FichaProducto extends React.Component{

    // Llama a todas las características que hereda.

    constructor(props){
        super();

        this.toggle = this.toggle.bind(this);

    }

    // Escribe las características del objeto en la consola.

    toggle(){
        console.log(this.props);
    }

    render(){
        return(
            <Button onClick={this.toggle}>Ver ficha</Button>
        );
    }
}

export default FichaProducto;