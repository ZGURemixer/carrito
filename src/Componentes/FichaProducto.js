import React from 'react';
import {CardImg, Modal, ModalHeader, ModalBody, Button, Container, ModalFooter} from 'reactstrap';
import './FichaProducto.css';
import listaCarrito from '../listaCarrito.json';
var CartList = listaCarrito.listaCarrito

class FichaProducto extends React.Component{

    // Llama a todas las características que hereda.

    constructor(props){
        super();
        this.state = {
            modal:false,
        };
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

    }
    
    agregarCarrito(){
        CartList.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
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
                    <ModalHeader>
                        {this.props.props.titulo}
                    </ModalHeader>

                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p> El detalle del producto seleccionado es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de $<b>{this.props.props.precio}</b>.</p>
                        <p>Hay <b>{this.props.props.stock}</b> unidades de este producto disponibles.</p>
                    </ModalBody>
                        
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;