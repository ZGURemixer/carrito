import React from 'react';
import {Navbar, NavItem, NavLink, Nav, NavbarBrand} from 'reactstrap'
import Carro from './Carro.js';

class Navegacion extends React.Component {
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/ZGURemixer/carrito">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    };
}
export default Navegacion;