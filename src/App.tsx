// Challenge 2 of 3 (reacting-to-input-with-state): Profile editor 

import { useState } from "react";
import "./App.css";

type Name = {
    firstname: string,
    lastname: string
}

export default function EditProfile() {
    const [name, setName] = useState<Name>({
        firstname: "Jane",
        lastname: "Jacobs"
    });
    const [isEditing, setIsEditing] = useState(false);

    function handleModeTogle(): void {
        setIsEditing(!isEditing);
    };

    function handleInputChanges(e: React.ChangeEvent<HTMLInputElement>): void {
        const nextName: Name = {...name,
            [e.target.name] : e.target.value
        }

        setName(nextName);
    };

    return (
        <form onSubmit={e =>{
                e.preventDefault();
                handleModeTogle()
            }}>
            <label>
                <p>
                    First Name: {
                    isEditing ?
                        <input 
                            name="firstname"
                            value={name.firstname}
                            onChange={e => handleInputChanges(e)}
                        /> :
                    <b>{name.firstname}</b>
                }
                </p>
                <p>
                    Last Name: {
                    isEditing ?
                        <input 
                            name="lastname"
                            value={name.lastname}
                            onChange={e => handleInputChanges(e)}
                        /> :
                    <b>{name.lastname}</b>
                }
                </p>
            </label>

            <button
                type="submit"
            >{
                isEditing ? "Save Profile" :  "Edit Profile"
            }</button>

            <p><i>Hello, </i>{name.firstname} {name.lastname}!</p>
        </form>
    )

}