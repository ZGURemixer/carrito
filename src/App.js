import React from 'react';
import Fragment from 'react';
import Producto from './Componentes/producto';
import './App.css';
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      {/* Plantilla para producto disponible en producto.js */}
      <div> 
        <Container>
          <Row>
              <Producto 
                titulo='Doom Eternal PS4' 
                imagen='https://www.weplay.cl/pub/media/catalog/product/cache/d406ac87fd7d160c9527a5559b847e93/p/s/ps4_doom-eternal.jpg' 
                descripcion='Los ejércitos del infierno han invadido la Tierra. Ponte en la piel del Slayer en una épica campaña para un jugador y cruza dimensiones para detener la destrucción definitiva de la humanidad.' 
                precio='666'
              />
              <Producto
                  titulo='Nintendo Switch'
                  imagen='https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._AC_.jpg'
                  descripcion='Consola Nintendo Switch Black'
                  precio='229.000'
              />
              <Producto
                titulo='Consola SONY PS4'
                imagen='https://estaticos.elperiodico.com/resources/jpg/9/8/playstation-sony-1370947347089.jpg'
                descripcion='Consola PS4 SLIM 500GB '
                precio='199.990'
              />
              <Producto
                titulo='Consola XBOX ONE'
                imagen='https://compass-ssl.xbox.com/assets/dd/2e/dd2ef163-a130-403a-a394-a5b11c1533c8.jpg?n=Xbox-Family_Image-0_X1S-1111_496x279.jpg'
                descripcion='Consola Xbox One solo juegos digitales '
                precio='229.000'
              />
              <Producto
                titulo='Consola New Nintendo 2DS'
                imagen='https://http2.mlstatic.com/nintendo-2ds-xl-black-and-turquoise-nuevo-D_NQ_NP_615117-MLM27995821063_082018-F.jpg'
                descripcion='2DS XL Black Turqoise'
                precio='129.990'
              />
              <Producto
                titulo='Big Chungus PS4'
                imagen='https://static.wikia.nocookie.net/big-chungus/images/7/7a/AB851D95-0AA6-496D-83FC-6616222C8F01.jpeg'
                descripcion='El videojuego más del mundo'
                precio='999.999.999'
              />
          </Row>
        </Container>
      </div>
  );
}

export default App;
