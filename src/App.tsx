// TODO: REPLACING ITEMS IN AN ARRAY
// (By returning a new one with array.map)
import { useState } from 'react'
import './App.css'

const initialCounters = [
  0, 0, 0
];
function List(): React.JSX.Element  {
  const [counters, setCounters] = useState( initialCounters );
  
  function handleIncrement(i: number): void {
    const nextArray = counters.map((counter, index) => {
      if(i === index ) {
        return counter + 1;
      } else {
        return counter
      }
    });

    setCounters(nextArray);
  };
  
  return (
    <>
      <ul>
        {counters.map((counter, ind) => (
          <li key={ind}>
            {counter}
            <button onClick={() => handleIncrement(ind)}
            >+1</button>
          </li>
        ))}
      </ul>
    </>
  )
};
export default List
