import { ReactNode, useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Heading( {children} : {
    children: ReactNode
}) {
    const level = useContext(LevelContext);

    if(level === 0) {
        throw Error("Heading must be inside a Seaction!");
    } else if (level < 1 || level > 6) {
        throw Error("Unknown heading level. Expected number from 1 to 6, but got: " + level);
    } else {
        const HeadingTag = `h${level}` as const; // to treat them as union members of the constant
        return <HeadingTag> {children} </HeadingTag>
    }
};
