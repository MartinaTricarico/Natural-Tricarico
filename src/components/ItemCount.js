import React, {useState} from 'react';
import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";

const ItemCount=({stock, initial})=>{
    const [itemsQty, setItemsQty] = useState(1);

    
    return (
        <div className='count' variant="outlined">
            <p><b>Lechuga</b></p>
            <div className='number'>
                
                <Button  
                onClick={ ()=> setItemsQty(itemsQty - 1) }
                disabled = {itemsQty == initial}
                variant="contained"><Remove style={{fontSize:20}}/></Button>
                <h2>{itemsQty}</h2>
                <Button 
                onClick={ ()=> setItemsQty(itemsQty + 1) } 
                disabled = {itemsQty == stock}
                variant="contained"><Add style={{fontSize:20}}/></Button>
            </div>
            
            <div className='add'>
                <Button variant="contained">Agregar al carrito</Button>
            </div>
            
        </div>
    )
}

export default ItemCount;