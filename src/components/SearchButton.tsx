import { Dispatch } from "react";

export default function SearchButton( {isFocused, setIsFocused} : {
    isFocused: boolean,
    setIsFocused: Dispatch<boolean>
}) {
    return (
        <button onClick={() => {
            setIsFocused(!isFocused);
        }}>
            Search
        </button>
    )
}