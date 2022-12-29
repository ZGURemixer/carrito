import React from 'react';
import {Button, CardText, CardSubtitle, CardTitle, CardBody, CardImg, Col, Card} from 'reactstrap';
import './producto.css';
import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
        return(
            <Col sm="4">    
                <Card className="Card" body outline color="primary">
                    <CardImg src={this.props.imagen}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Valor: </b>{this.props.precio}</CardSubtitle>
                        <CardText>
                            {this.props.descripcion}
                        </CardText>
                        <FichaProducto props={this.props}/>
                    </CardBody>
                </Card>
            </Col> 
        );
    }
}

export default Producto

// -- Código Card Normal --

// import React from 'react';
// import {Card} from 'reactstrap';
// function Producto(){
//     return(
//         <Card>
//             ¡Aprendiendo a parecer un imbécil!
//         </Card>
//     );
// }
// export default Producto

// -- Código Card Columna --

// import React from 'react';
// import {Col, Card} from 'reactstrap';
// function Producto(){
//     return(
//         <Col sm="4">    
//             <Card>
//                 ¡Aprendiendo a parecer un imbécil!
//             </Card>
//         </Col> 
//     );
// }

// export default Producto

// -- Código antiguo con botones inservibles, lol --

// class Producto extends React.Component{
//     render(){
//         return(
//             <Col sm="4">    
//                 <Card className="Card" body outline color="primary">
//                     <CardImg src={this.props.imagen}></CardImg>
//                     <CardBody>
//                         <CardTitle>{this.props.titulo}</CardTitle>
//                         <CardSubtitle><b>Valor: </b>{this.props.precio}</CardSubtitle>
//                         <CardText>
//                             {this.props.descripcion}
//                         </CardText>
//                         <Button className="Button">
//                             Ver ficha
//                         </Button>
//                         <Button className="Button">
//                             Comprar
//                         </Button>
//                     </CardBody>
//                 </Card>
//             </Col> 
//         );
//     }
// }

// export default Producto