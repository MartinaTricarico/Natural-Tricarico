import React, {useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {productListData} from "./ItemList.js";

const ItemListContainer = () => {
  
  const [productListData , setProductListData] = useState ([])

  const getFetch = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(productListData)
    }, 2000);
  });

  getFetch.then(productos => {setProductListData(productos)}
  ).catch((err =>{
    console.log('Hay un error', err)
  }))
 
  return  (
    <>
        <div className='catalogo'>
            <h3>Catálogo</h3>
        </div>

        
        <ItemList  />

        <ItemCount
          stock={15} initial={1}
        />
    </>
  );
}


export default ItemListContainer;