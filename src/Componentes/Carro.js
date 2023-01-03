import React from 'react';
import {Badge, Button, PopoverBody, PopoverHeader, Popover, Table} from 'reactstrap';
import listaCarrito from '../listaCarrito.json';
var CartList = listaCarrito.listaCarrito


class Carro extends React.Component{
    constructor(){
        super();
        this.state={
            popoverOpen:false,
            CartList
        };

        this.toggle=this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }
    
    render(){
        const arregloCarrito = this.state.CartList.map(
            (CartList, i) => {
                return (
                    <tr>
                        <td>{(i += 1 )}</td>
                        <td>{CartList.titulo}</td>
                        <td>{CartList.precio}</td>
                    </tr>
                )
            }
        )
        
        // Suma de números
        let cartListPrecio = CartList.reduce((acc, item) => acc + parseInt(item.precio), 0);
        // console.log(cartListPrecio);


        return(
            <div>
                <Button id="Popover1" color="info">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secondary">{arregloCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total:</th>
                                    <th></th>
                                    <th>{cartListPrecio} CLP</th>
                                </tr>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;