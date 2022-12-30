import React from 'react';
import {Navbar, NavItem, NavLink, Nav, NavbarBrand} from 'reactstrap'
class Navegacion extends React.Component {
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">
                            Acerca de
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.youtube.com/@zguremixer5293">
                            YouTube
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    };
}
export default Navegacion;