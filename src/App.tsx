// Choosing the State Structure
//  Challenge 1 of 4: Fix a component that’s not updating 

import { useEffect, useState } from "react";
import Clock from "./components/Clock";

export type Color = "lightcoral" | "midnightblue" | "rebeccapurple";

function useTime(): Date {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
};

export default function App() {
    const time = useTime();
    const [color, setColor] = useState<Color>("lightcoral");
    return (
        <div>
            <p>
                Pick a color: {" "}
                <select value={color} onChange={(e) => setColor(e.target.value as Color)}>
                    <option value="lightcoral">lightcoral</option>
                    <option value="midnightblue">midnightblue</option>
                    <option value="rebeccapurple">rebeccapurple</option>
                </select>
            </p>
            <Clock color={color} time={time.toLocaleTimeString()}/>
        </div>
    )
}
