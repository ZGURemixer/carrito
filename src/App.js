import React from 'react';
import Producto from './Componentes/producto';
import './App.css';
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Componentes/Navegacion.js';
import listaProductos from './listaProductos.json';

// Parsea el JSON
var listaProductos2 = (listaProductos.listaProductos);

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      listaProductos2
    };
  }

  render(){
    const arregloComponentes = this.state.listaProductos2.map(
      (listaProductos2, i) => {
        return(
          <Producto

            // revisa el JSON

            key = {i}
            titulo={listaProductos2.titulo}
            imagen={listaProductos2.imagen}
            descripcion={listaProductos2.descripcion}
            precio={listaProductos2.precio}
            stock={listaProductos2.stock}
          />
        )
      }
    );

    return (
        {/*  */}
            ? <>
              <Container>
                <Navegacion titulo="La tienda de Roger"/>
                <Row>
                    
                    {/* Muestra los productos. Plantilla para producto disponible en producto.js */}
                    
                    {arregloComponentes}
                </Row>
              </Container>
            </>:''
    );
  }
}

export default App;
