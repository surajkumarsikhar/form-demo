import { useState } from "react";

const Nameform = ({ addName }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateText(firstName) || !validateText(lastName)){
            setFirstName("");
            setLastName("");
            return
        }
        addName(firstName + " " + lastName);
        setFirstName("");
        setLastName("");
    };
    function validateText(str){
        if(str.length<3){
            setError("Length must be at least 3 character.")
            return false;
        }
        if(!/^[A-Za-z]+$/.test(str)){
            setError("Name must contain only letters.")
            return false;
        }
        return true;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> First Name
            <input
            style={{padding:"7px 30px",marginBottom:"10px",marginLeft:"10px"}}
                type="text"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
            />
             </label>
            <br />
            <label> Last Name 
            <input
            style={{padding:"7px 30px",marginBottom:"10px",marginLeft:"10px"}}
                type="text"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
            />
            </label>
            {error && <p style={{color:"red"}}>{error}</p>}
            <br />
            <button type="submit" onClick={sumbit}>Submit</button>
        </form>
    );
};

export default Nameform;
