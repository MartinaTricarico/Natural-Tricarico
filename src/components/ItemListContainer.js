import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer({greeting}) {
  return (
    <>
        
        <div className='catalogo'>
            <p>{greeting}</p>
        </div>
        
        <ItemCount
          stock={15} initial={1}
        />

    </>
  );
}

export default ItemListContainer;