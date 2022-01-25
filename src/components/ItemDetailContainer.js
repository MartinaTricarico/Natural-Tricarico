import React from 'react';

const ItemDetailContainer = ()=> {

    const getProductsFromCategory = (category) => {
        return fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/classify')
        .then(data => {
           data.json();
        })
        .catch(error => {
          console.error(error);
        });
    }

    return (
        <div>
            
        </div>

  )
}

export default ItemDetailContainer;
