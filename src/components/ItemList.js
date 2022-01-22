import React from 'react';
import Item from './Item';
import { productListData } from "./ProductListData.js";

const ItemList = () => {        
    return (
        <div>
            {productListData.map((product) =>(
                <Item key={product} product={product} />
            ))}
        </div>
        
    )
}


export default ItemList;
