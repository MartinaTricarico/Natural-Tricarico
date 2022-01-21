import React from 'react';
import { Button } from "@material-ui/core";
import ItemList from './ItemList';

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
   


    // const task = new Promise ((resolve, reject) => {     
    //     setTimeout(() => {
    //         let item = 
    //         if () {
    //             resolve (item.title, item.id, item.price, item.pictureUrl, item.details)
    //         } else {
    //             reject ("no se encontró nada")
    //         }
    //     }, 2000);
    // })

    // task.then (result => {
    // console.log (result) 
    // return "Funciono"
    // }).catch (err => {
    //     console.log(err)
    // }).finally (result =>{
    //     console.log("terminado")
    // })
} 

export default Item;