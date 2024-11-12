// Challenge 1 of 1: Replace prop drilling with context --- passing-data-deeply-with-context


import { useContext, useState } from "react";
import { Place, places } from "./assets/data";
import { getImageUrl } from "./helpers/utils";
import { ImageSizeContext } from "./components/Context";

export default function App() {
    const [isLarge, setIsLarge] = useState(false);
    const ismageSize = isLarge ? 150 : 100;
    return (
        <ImageSizeContext.Provider value={ismageSize}>
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={(e) => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <List/>
        </ImageSizeContext.Provider>
    )
};

function List() {
    const listItems = places.map((place) => (
        <li key={place.id}>
            <PlaceComp
                place={place}
            />
        </li>
    ));
    return (
        <ul> {listItems} </ul>
    )
};

function PlaceComp( {place} : {
    place: Place,
} ) {
    return (
        <>
            <PlaceImage
                place={place}
            />
            <p>
                <b> {place.name} </b>
                {": " + place.description}
            </p>
        </>
    )
};

function PlaceImage( {place} : {
    place: Place,
} ) {
    const imageSize = useContext(ImageSizeContext);
    console.log("imageSize is: ", imageSize)
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    )
};