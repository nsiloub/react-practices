// Challenge 4 of 5: Clear an image while it’s loading --- preserving-and-resetting-state

import "./App.css"
import { useState } from "react";


export default function Gallery() {
    const [index, setIndex] = useState(0);
    const hasNext = index < images.length - 1;

    const image: Image = images[index];

    function handleClick(): void {
        if(hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h3>
                Image {index + 1} of {images.length}
            </h3>
            <img key={image.src} /* KEY here was the result */ src={image.src} />
            <p>
                {image.place}
            </p>
        </>
    )
};

type Image = {
    place: string,
    src: string
};

const images: Image[] = [
    {
        place: 'Penang, Malaysia',
        src: 'https://i.ytimg.com/vi/_fEW5gX4U2k/maxresdefault.jpg'
    }, {
        place: 'Lisbon, Portugal',
        src: 'https://www.roadaffair.com/wp-content/uploads/2020/01/bicycle-tour-lisbon-portugal-shutterstock_707634676.jpg'
    }, {
        place: 'Bilbao, Spain',
        src: 'https://www.urlaubstracker.at/wp-content/uploads/2019/02/Spanien-Bilbao-Fluss.jpg'
    },  {
        place: 'Valparaíso, Chile',
        src: 'https://guiaviajarmelhor.com.br/wp-content/uploads/2021/06/valparaiso-vinadelmar-3-1600x1200.jpg'
    }, {
        place: 'Schwyz, Switzerland',
        src: 'https://i.pinimg.com/originals/3f/60/63/3f606352d89fe8892fbf7bfd0b1c0234.jpg'
    }, {
        place: 'Prague, Czechia',
        src: 'https://www.travelanddestinations.com/wp-content/uploads/2016/10/Prague-Skyline-at-night.jpg'
    }, {
        place: 'Ljubljana, Slovenia',
        src: 'https://media-cdn.tripadvisor.com/media/photo-s/07/d4/5e/47/dragon-bridge-ljubljana.jpg'
    }
];