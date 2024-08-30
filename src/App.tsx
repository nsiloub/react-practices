// TODO: MAKING OTHER CHANGES TO AN ARRAY
// like reversing the array

import { useState } from 'react';
import './App.css'

const initialList = [
  {id: 0, title: 'Big Bellies'},
  {id: 1, title: 'Lunar Landscape'},
  {id: 2, title: 'Terracotta Army'},
  {id: 3, title: 'Random Title'},
];

function List(): React.JSX.Element {
  const [list, setList] = useState( initialList);

  function handleClick(): void {
    const nextList: typeof initialList = [
      ...list.slice(0).reverse() // copy first, and do the reversing, then spread the data
    ];

    setList(nextList)
  };

  return(
    <>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  )
}
export default List
