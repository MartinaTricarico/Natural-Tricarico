import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';

const CartWidget =()=>{
    return (
        <div>
            <Button className='cart' style={{color: "black"}}>  
                <ShoppingCart style={{color: "black"}}/>
                <p>0</p>
            </Button>
        </div>
    )
}

export default CartWidget;