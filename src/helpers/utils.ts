import { Place } from "../assets/data";

export function getImageUrl(place: Place): string {
    return (
        "https://i.imgur.com/" + place.imageId + "1.jpg"
    )
};