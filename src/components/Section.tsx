import { ReactNode, useContext } from "react"
import { Level, LevelContext } from "./LevelContext"

export default function Section ( {children, isFancy} : {
    children: ReactNode, isFancy? : boolean
}) {
    const level = useContext(LevelContext);
    const nextLevel = level === 6 ? 6 : (level + 1 as Level);
    return (
        <section className={
            "section " + ( isFancy ? "fancy" : "" )
        }>
            <LevelContext.Provider value={nextLevel}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}