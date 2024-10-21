// choosing the state structure -- Challenge 2 of 4: Fix a broken packing list
import "./App.css"
import { useState } from "react"
import PackingList from "./components/PackagingList"
import AddItem from "./components/AddItem"

export type Item = {
    id: number,
    title: string,
    packed: boolean
}

const initialItems: Item[] = [
    {id: 0, title: 'Warm socks', packed: true},
    { id: 1, title: "Travel journal", packed: false},
    { id: 2, title: "Watercolors", packed: false},
]

export default function TravelPlan() {
    const [itemList, setItemList] = useState<Item[]>( initialItems );
    const nextId = itemList.length + Math.random()
    function handleItemChanges(itemId : Item["id"], e:( React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>)): void{
        console.log(e.type);

        if(e.type === "change") {
            const eventValue = (e.target as HTMLInputElement).checked
            const nextItemList = [...itemList].map((item) => {
                if(item.id === itemId) {
                    return {
                        ...item,
                        packed: eventValue
                    } 
                } else {
                    return item;
                }
            })
            setItemList(nextItemList)
        };

        if(e.type === "click") {
            // const eventValue = (e.target as HTMLButtonElement).
            const nextItemList: Item[] = [...itemList].filter((item) => item.id !== itemId);
            setItemList(nextItemList)
        }

    };

    function handleAddItem(itemTitle: Item['title']): void  {
        console.log(itemTitle)
        const nextItemList: Item[] = [
            ...itemList,
            {
                id: nextId,
                title: itemTitle,
                packed: false
            }
        ];

        setItemList(nextItemList);
    };

    const totalItems = itemList.length;
    const totalPacked = itemList.filter((item) => item.packed).length;

    return (
        <>
            <AddItem
                onAddItem={handleAddItem}
            />
            <PackingList
                itemList={itemList}
                onItemChanges={handleItemChanges}
            />
            <hr />
            <b>Packed Out {totalPacked} Of The {totalItems} Packed!</b>
        </>
    )
};