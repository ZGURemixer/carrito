import React from 'react';
import {Modal, Button, Container} from 'reactstrap';

class FichaProducto extends React.Component{

    // Llama a todas las características que hereda.

    constructor(props){
        super();
        this.state = {
            modal:false
        };
        this.toggle = this.toggle.bind(this);

    }

    // Escribe las características del objeto en la consola.

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

    }

    render(){
        return(
            <Container>
                {/* Caracerísticas del botón que realiza la acción */}
                <Button onClick={this.toggle}>Ver ficha</Button>

                {/* Acciones de dicho botón */}
                <Modal isOpen={this.state.modal}>
                    React en JovenesProgramadores
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;