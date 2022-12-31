import React from 'react';
import {Badge, Button} from 'reactstrap';

class Carro extends React.Component{
    render(){
        return(
            <div>
                <Button>
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secondary">0</Badge>
                </Button>
            </div>
        );
    }
}

export default Carro;