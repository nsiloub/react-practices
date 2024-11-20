// Challenge 4 of 4: Fix fetching inside an Effect [Race conditions: two asynchronuous code fight] --- synchronizing-with-effects

import { useEffect, useRef, useState } from "react"
import fetchBio, { Person } from "./helpers/api"

export default function Page() {
    const [person, setPerson] = useState<Person>("Alice");
    const [bio, setBio] = useState<string | null>(null);

    
    useEffect(() => {
        let ignore = false;
        setBio(null); // this is to ensure that not previously fetched bio is used, and make code more predictable
        fetchBio(person).then(result => {
            if(!ignore) { // to only fetch if we're "not yet done finding the bio"
                setBio(result);
            }
        });

        return () => {
            ignore = true; // to signal that "we are found our bio, and you can cancel further fetch,..."
        }
    }, [person]);

    return (
        <>
            <select
                value={person}
                onChange={(e) => {
                    setPerson(e.target.value as Person)
                }}
            >
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <hr />
            <p><i>{bio ?? "Loading..."}</i></p>
        </>
    )
}