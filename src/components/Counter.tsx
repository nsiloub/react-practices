import { useEffect, useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervallId = setInterval(onTick, 1000);

        function onTick() {
            setCount(c => c + 1);
        }

        return () => clearInterval(intervallId); // This Was the missing part
        // without this cleanup function, the count would be twice increased
    }, [])

    return (
        <h1> {count} </h1>
    )
}