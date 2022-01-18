import { TextFormatRounded } from '@material-ui/icons';
import React from 'react';
import Item from './Item';

const ItemList = () => {
    const product = [
        {title: "Tomate", id: "tomate", price: "$75kg", url:'', description:""},
        {title: "Zanahoria", id: "zanahoria", price: "$45kg", url:'', description:""},
        {title: "Manzana", id: "manzana", price: "$115kg", url:'', description:""},
    ];
    const task = new Promise ((resolve, reject) => {
        if (product){
            resolve ([product.title, product.id, product.price, product.url, product.description])
        } else {
            reject()
        }
    }, setTimeout(2000));

    task.then(result => {
        console.log('No es error: ' + result);

    }, err => {
        console.log ('Error: ' + err)
    })

    console.log (task)
    return (
        <Item product = {task}/>
    )
}



export default ItemList;
