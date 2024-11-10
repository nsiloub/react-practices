import { ReactNode } from "react";

export default function Section( {children} : {
    children: ReactNode
}) {
    return (
        <section className="section">
            {children}
        </section>
    )
};