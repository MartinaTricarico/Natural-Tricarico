import React from 'react';
import { Button } from "@material-ui/core";

const Item = ({product}) => {
    const {title, details, pictureUrl, stock} = product || []
    return (
        <div className='producto'>
            <div display="flex">
                <div>
                    <h2>{title}</h2>
                </div>
                <div>

                </div>
                    <img src={pictureUrl} alt='' width={150}/>
                <div>
                    <p>Detalle: {details}</p>
                </div>

                <div>
                    <Button variant="contained">Ver detalle del producto</Button>
                </div>
                
                <div>
                    <p className='stock'>Stock disponible: {stock}</p>
                </div>

            </div>
        </div>
    )
   
} 

export default Item;