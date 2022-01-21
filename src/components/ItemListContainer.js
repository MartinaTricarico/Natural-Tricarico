import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
  return (
    <>
        
        <div className='catalogo'>
            <p>{greeting}</p>
        </div>
        
        <ItemCount
          stock={15} initial={1}
        />

        <ItemList />
    </>
  );
}

export default ItemListContainer;