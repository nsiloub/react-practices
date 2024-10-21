import { Item } from "../App"
import { useState } from "react";

export default function AddItem({onAddItem} : {
    onAddItem: (itemTitle: Item["title"]) => void
}) {
    const [itemTitle, setItemTitle] = useState<Item["title"]>("")
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAddItem(itemTitle);
        }}>
            <input
                type="text"
                placeholder="Add item"
                required
                value={itemTitle}
                onChange={(e) => setItemTitle(e.target.value)}
            />
            {" "}
            <button 
                type="submit"
            >Add</button>
        </form>
    )
};