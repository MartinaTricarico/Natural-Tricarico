import { TextFormatRounded } from '@material-ui/icons';
import { Button } from "@material-ui/core";
import React from 'react';
import Item from './Item';

const ItemList = () => {
    const itemProducts = 
        [{title: "Tomate",
            id: "tomate",
            price: "$75kg",
            pictureUrl: 'https://walmartar.vteximg.com.br/arquivos/ids/835774-1000-1000/Tomate-Redondo-X-1-Kg-1-17182.jpg?v=636687342049630000',
            details: "Redondo",
            stock: "15"
        }]
        
    return (
        <div>
            {itemProducts.map((product) =>(
                <Item product={product} />
            ))}
        </div>
        
    )
}


export default ItemList;
