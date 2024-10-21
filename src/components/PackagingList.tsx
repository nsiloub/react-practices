import { Item } from "../App"

export default function PackingList({itemList, onItemChanges} : {
    itemList: Item[], onItemChanges: (itemId: Item["id"], e:( React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>)) => void
})  {

    return (
        <ul>
            {itemList.map((item) => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={item.packed}
                            onChange={(e) => onItemChanges(item.id, e)}
                        />
                        {item.title}
                    </label>
                    <button onClick={(e) => onItemChanges(item.id, e)}>Delete</button>
                </li>
            ))}
        </ul>
    )
};