import React from 'react';
import ItemCount from './ItemCount';


function ItemDetail({item}) {
    return (
        <ItemCount item={item} stock={15} initial={1} />
    )
}

export default ItemDetail;
