import React from 'react';
import { productListData } from "./ProductListData.js";

const ItemList = () => {        
    return (
        <div>
            {productListData.map((productos) =>(
                <ItemList productos={productos}  />
            ))}
        </div>
        
    )
}


export default ItemList;
