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
        // Esta variable se preocupa del texto
        var AvailabilityText = "Hay ";

        // Esta variable se preocupa del botón 
        var ButtonOfDoom = <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>;

        // Esta variable nos devuelve el título actualmente seleccionado.
        var TituloElementoSeleccionado = this.props.props.titulo;

        // Esta variable nos devuelve el stock inicial actualmente seleccionado.
        var StockInicialElementoSeleccionado = this.props.props.stock;

        // Esta variable se inicia en 0 para evitar problemas. Va aumentando a medida que se agreguen objetos al carrito.
        var StockCompradoPorElUsuario = 0;

        // Aquí se detecta si la lista del carrito NO es igual a cero.
        if (CartList.length !== 0) {

            // Esta constante genera un Array con todas las unidades de cierto producto que hayamos puesto en nuestro carrito.
            const objetosObtenidos = CartList.filter(product => product.titulo.includes(TituloElementoSeleccionado));
            StockCompradoPorElUsuario = objetosObtenidos.length;
        }

        // Se verifica si la resta es mayor a cero.
        if ([StockInicialElementoSeleccionado - StockCompradoPorElUsuario] > 0) {
            
            var StockFinal = StockInicialElementoSeleccionado - StockCompradoPorElUsuario;

        } else {

            AvailabilityText = "No hay ";
            ButtonOfDoom = "";
        }


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
                        <p>{AvailabilityText}<b>{StockFinal}</b> unidades de este producto disponibles.</p>
                    </ModalBody>
                        
                    <ModalFooter className="modalFooter">
                        {ButtonOfDoom}
                        <Button color="secondary" onClick={this.toggle}>Atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default FichaProducto;