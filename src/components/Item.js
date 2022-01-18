import React from 'react';
import { Button } from "@material-ui/core";

const Item = ({title, details}) => {
    return (
        <div className='producto'>
            <div>
                {title} <br> Detalles: {details} </br>
            </div>
            <div>
            <Button variant="contained">Ver detalle del producto</Button>
            </div>
        </div>
    )
}

export default Item;
