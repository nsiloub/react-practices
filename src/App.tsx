// TODO: TRANSFORMING AN ARRAY
// (By returning a new one with array.map)
import { MouseEvent, useState } from 'react'
import './App.css'

const initialShapes: {
    id: number, 
    type: "circle" | "square", 
    x: number, 
    y: number
  }[] = [
    {id: 0, type: "circle", x: 50, y: 100},
    {id: 1, type: "square", x: 150, y: 100},
    {id: 2, type: "circle", x: 250, y: 100},
];

function List(): React.JSX.Element {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick(): void{
    // transforming by returning a new array of shapes
    const nextShape = shapes.map((shape) => {
      if(shape.type === "square") {
        return shape;
      } else {
        
        // changed y properties
        return {
          ...shape,
          y: shape.y + 50,
        }
      }
    });

    setShapes(nextShape);
  };

  return (
    <>
      <button onClick={handleClick}>
        Move Circles Down!
      </button>
      {shapes.map((shape) =>(
        <div
          key={shape.id}
          style={{
            backgroundColor: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: 
              shape.type === "circle" ?
                "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  )
};

export default List
