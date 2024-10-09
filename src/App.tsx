// Challenge 1 of 3: Add and remove a CSS class
import "./App.css"

import { useState } from "react"

export default function Picture() {
    const [isOddClick, setIsOddClick] = useState<boolean>(true);

    let changingClass: "background--active" | "picture--active";
    if(isOddClick) {
        changingClass = "picture--active"
    } else {
        changingClass = "background--active"
    };

    function handleImageClick(e: React.MouseEvent<HTMLImageElement>): void {
        e.stopPropagation(); // just security mesure...
        setIsOddClick(!isOddClick);
    };

    return (
        <div className={`background ${changingClass}`}>
            <img
                className={`picture ${changingClass}`}
                onClick={handleImageClick}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://livingnomads.com/wp-content/uploads/2017/05/28/Kampung-Pelangi-Rainbow-Village-in-Indonesia-3-150x150.jpg"
            />
        </div>
    )
};