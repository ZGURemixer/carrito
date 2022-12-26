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

import React from 'react';
import {Button, CardText, CardSubtitle, CardTitle, CardBody, CardImg, Col, Card} from 'reactstrap';
import './producto.css';

function Producto(props){
    return(
        <Col sm="4">    
            <Card className="Card" body outline color="primary">
                <CardImg src={props.imagen}></CardImg>
                <CardBody>
                    <CardTitle>{props.titulo}</CardTitle>
                    <CardSubtitle><b>Valor: </b>{props.precio}</CardSubtitle>
                    <CardText>
                        {props.descripcion}
                    </CardText>
                    <Button className="Button">
                        Ver ficha
                    </Button>
                    <Button className="Button">
                        Comprar
                    </Button>
                </CardBody>
            </Card>
        </Col> 
    );
}

export default Producto