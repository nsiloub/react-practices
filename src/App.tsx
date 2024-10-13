//Choosing the State Structure -- Avoid duplication in state

import { useState } from "react";
import "./App.css";

type Item = {
    title: string,
    id: number
}

const initialItems: Item[] = [
    {title: "pretzels", id: 0},
    {title: "crispy seaweed", id: 1},
    {title: "granola bar", id: 2},
]

export default function Menu() {
    const [items, setItems] = useState<Item[]>( initialItems );

    // !Instead of  this
    /* const [selectedItem, setSelectedItem] = useState<Item>(items[0]); //! Duplicates the values */

    //todo: DO THIS
    const [selectedId, setSelectedId] = useState<Item["id"]>(0);

    const selectedItem: Item | undefined = items.find((item) => item.id === selectedId);

    function handleItemChange(id: Item["id"], e: React.ChangeEvent<HTMLInputElement>): void {
        const nextItems: Item[] = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value
                }
            } else {
                return item;
            }
        })

        setItems(nextItems);
    };

    return (
        <>
            <h2>What's your travel snack ?</h2>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <input
                            value={item.title}
                            onChange={(e) => {
                                handleItemChange(item.id, e);
                            }}
                        />
                        <button onClick={() => {
                            setSelectedId(item.id);
                        }}>Choose</button>
                    </li>
                ))}
            </ul>
            <p>You picked <b>{selectedItem?.title}</b>.</p>
        </>
    )
}