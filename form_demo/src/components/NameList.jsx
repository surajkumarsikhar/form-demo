import { useState } from "react";
import NameForm from "./NameForm";
import { v4 as uuidv4 } from "uuid";

const NameList = () => {
    const [names, setNames] = useState([]);

    const addName = (new_name) => {
        setNames([...names, { title: new_name, id: uuidv4() }]);
    };

    console.log("This is names", names);

    return (
        <div>
            <ul>
                {names.map((name) => (
                    <li key={name.id}>{name.title}</li>
                ))}
            </ul>
            <NameForm addName={addName} />
        </div>
    );
};

export default NameList;
