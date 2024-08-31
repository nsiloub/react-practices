// TODO: CHALLENGE 1: Update an item in the shopping cart

import { useState } from 'react';

import './App.css';

const initialProduct = [
  {
    id: 0,
    name: "Baklava",
    count: 1
  },
  {
    id: 1,
    name: "Cheese",
    count: 5
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2
  },
];

function ShoppingCart(): React.JSX.Element {
  const [products, setProducts] = useState( initialProduct );
  
  function handleIncreaseClick(productId: number): void {
    const nextProducts = products.map((product) => {
      if(productId === product.id){
        return {...product, count: product.count + 1};
      } else {
        return product;
      }
    })

    setProducts(nextProducts);
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}
          <button onClick={() => handleIncreaseClick(product.id)}>
            {product.count}
          </button>
        </li>
      ))}
    </ul>
  )
};
export default ShoppingCart
