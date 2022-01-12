import React from 'react';

function ItemListContainer({greeting}) {
  return (
    <>
        <div className='catalogo'>
            <p>{greeting}</p>
        </div>
    </>
  );
}

export default ItemListContainer;