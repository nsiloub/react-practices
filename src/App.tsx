// Challenge 5 of 5: Populate a chain of select boxes [two useState, on depends on the other] --- lifecycle-of-reactive-effects

import { useEffect, useState } from "react";
import "./App.css";
import { fetchData, Place, Planet } from "./helpers/api";

export default function Page() {
    const [planetList, setPlanetList] = useState<Planet[]>([]);
    const [planetId, setPlanetId] = useState<Planet["id"] | undefined>();

    const [placeList, setPlaceList] = useState<Place[]>([]);
    const [placeId, setPlaceId] = useState<Place["id"] | undefined>(undefined);


    useEffect(() => {

        let ignore = false;

        fetchData("/planets").then((result) => {
            if (!ignore) {
                console.log("Fetched a list of planets.");
                setPlanetList(result as Planet[]);
                setPlanetId("earth");
            }
        });

        return () => {
            ignore = true
            setPlanetList([]);
            setPlanetId(undefined)
        }

    }, []);

    useEffect(() => {
        if (!planetId) { // to avoid the undefined case
            return;
        }
        let ignore = false;

        fetchData(`/planets/${planetId}/places`).then((result) => {
            if (!ignore) {
                console.log("Fetched a list of places");
                setPlaceList(result);
                // setPlaceId(planetList.filter(plnt => plnt.id === planetId)[0].id)
            }
        })

        return () => {
            ignore = true;
            setPlaceList([]);
            setPlaceId(undefined);
        }
    }, [planetId])

    return (
        <>
            <label>
                Pick a planet: {" "}
                <select
                    value={planetId}
                    onChange={(e) => {
                        setPlanetId(e.target.value as Planet["id"]);
                    }}
                >
                    {planetList.map((planet) => (
                        <option key={planet.id} value={planet.id}>{planet.name}</option>
                    ))}
                </select>
            </label>
            <label>
                Pick a place: {" "}
                <select
                    value={placeId}
                    onChange={(e) => {
                        setPlaceId(e.target.value);
                    }}>
                    {placeList.map((place) => (
                        <option key={place.id} value={place.id}>{place.name}</option>
                    ))}
                </select>
            </label>
        </>
    )
}