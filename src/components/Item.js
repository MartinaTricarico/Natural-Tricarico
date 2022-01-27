import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';


const Item = ({ item }) => {

    const { title, details, pictureUrl, stock, id} = item || [];
    return (
        <div >
            <div >
                <div>
                    <h2>{title}</h2>
                </div>
                    <img src={pictureUrl} alt='' width={130}/>
                <div>
                    <p>Detalle: {details} </p>
                </div>

                <div>
                    <NavLink to={`/item/${id}`}><Button variant="contained">Ver detalle del producto</Button></NavLink>
                </div>
                
                <div>
                    <p className='stock'>Stock disponible: {stock}</p>
                </div>

            </div>
        </div>
    )
   
} 

export default Item;