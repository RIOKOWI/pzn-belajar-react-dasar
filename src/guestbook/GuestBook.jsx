import { useState } from "react";

export default function GuestBook(){
    const [name, setName] = useState(""); // set default state
    const [message, setMessage] = useState(""); // set default state


    function handleSubmit(e){
        e.preventDefault(); // change behavior default website
        setName(""); // setelah submit kosongin value
        setMessage(""); // setelah submit kosongin value

        alert(`Name : ${name}, Message : ${message}`) // tampilkan alert value name dan message
    }

    return (
        <>
            <h1>Guest Book</h1>
            <label htmlFor="name">Name</label>
            <br/>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/> {/* ambil input value dari name dan masukin ke state setName */}
            <br/>
            <label htmlFor="message">Message</label>
            <br />
            <textarea type="text" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}/> {/* ambil input value dari message dan masukin ke state setMessage */}
            <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}