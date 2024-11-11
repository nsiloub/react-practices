import { ReactNode, useContext } from "react";
import { Level, LevelContext } from "./LevelContext";

export default function Section( {children} : {
    children: ReactNode,
}) {
    const level = useContext(LevelContext);
    const nextLevel: Level = level === 6 ? 6 : (level + 1 as Level);
    return (
        <section className="section">
            <LevelContext.Provider value={nextLevel}>
                {children}
            </LevelContext.Provider>
        </section>
    )
};