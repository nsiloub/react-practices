// Challenge 2 of 2: Filtering a list  -- sharing-state-between-components

import "./App.css";
import { useState } from "react";
import { filterItems, Food, foods } from "./assets/data";

export default function FilterableList() {
    const [query, setQuery] = useState("");
    const results: Food[] = filterItems(foods, query);

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
        setQuery(e.target.value);
    };

    return (
        <>
            <SearchBar
                onSearch={handleSearch}
                searchQuery={query}
            />
            <List
                foodList={results}
            />
        </>
    )
};

function SearchBar({searchQuery, onSearch} : {
    searchQuery: string, onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <label>
            Search: {" "}
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e)}
            />
        </label>
    )
};

function List({foodList} : {
    foodList: Food[]
}) {
    return (
        <table>
            <tbody>
                {foodList.map((food) => (
                    <tr key={food.id}>
                        <td> {food.name} </td>
                        <td> {food.description} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};