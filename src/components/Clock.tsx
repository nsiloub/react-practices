import { Color } from "../App";

export default function Clock({color, time} : {color: Color, time: string}) {
    // ! don't put prop in state, like this
    // ! const [color, setColor] = useState<Color>(color); //BAD
    return (
        <h1 style={{color: color}}>
            {time}
        </h1>
    )
}