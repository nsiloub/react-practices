// TODO: CHALLENGE 2: Remove an item from the shopping cart 

import { useState } from 'react';
import './App.css';

const initialProducts =  [
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
  const [products, setProducts] = useState( initialProducts );

  function handleBuyButtonsClick(e: React.MouseEvent<HTMLButtonElement>, productId: number): void {
    const fieldName = (e.target as HTMLButtonElement).name; //for picking the right operation's button
    const nextProducts = products.map((product) => {
      if(productId === product.id) {
        return {
          ...product, 
          count: 
            fieldName === "increment" ? 
              product.count +1 :
              product.count - 1
        }
      } else {
        return product
      }
    });

    setProducts(nextProducts.filter((product) => {
      return product.count > 0
    }));
  };
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}
          {" "}
          ({product.count})
          {" "}
          <button name='increment' onClick={(e) => handleBuyButtonsClick(e, product.id)}>+</button>{" "}
          <button name='decrement' onClick={(e) => handleBuyButtonsClick(e, product.id)}>-</button>
        </li>
      ))}
    </ul>
  )
}
export default ShoppingCart
