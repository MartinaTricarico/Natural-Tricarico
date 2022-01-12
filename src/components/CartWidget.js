import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';

const cartWidget =()=>{
    return (
        <>
            <Button >  
                <ShoppingCart style={{color: "black", padding: "60px"}}/>
            </Button>
        </>
    )
}

export default cartWidget;