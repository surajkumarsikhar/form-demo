import { useState } from "react";

const Nameform = ({ addName }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        if (!validateText(firstName) || !validateText(lastName)) {
            setFirstName("");
            setLastName("");
            return;
        }

        addName(`${firstName} ${lastName}`);
        await submit(firstName, lastName);

        setFirstName("");
        setLastName("");
    };

    function validateText(str) {
        if (str.length < 3) {
            setError("Length must be at least 3 characters.");
            return false;
        }
        if (!/^[A-Za-z]+$/.test(str)) {
            setError("Name must contain only letters.");
            return false;
        }
        return true;
    }

    async function submit(firstName, lastName) {
        try {
            const response = await fetch("http://localhost:3002/api/addName", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ firstName, lastName }),
            });

            if (!response.ok) {
                throw new Error("Failed to send data to the server");
            }

            console.log("Name successfully submitted:", firstName, lastName);
        } catch (error) {
            console.error("Error submitting name:", error);
            setError("Failed to submit name. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name
                <input
                    style={{ padding: "7px 30px", marginBottom: "10px", marginLeft: "10px" }}
                    type="text"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Last Name
                <input
                    style={{ padding: "7px 30px", marginBottom: "10px", marginLeft: "10px" }}
                    type="text"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Nameform;
