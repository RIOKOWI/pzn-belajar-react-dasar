import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";


export default function GuestBook(){
    const [name, setName] = useState(""); // set default state
    const [message, setMessage] = useState(""); // set default state

    const nameInput = useRef(null)

    function handleSubmit(e){
        e.preventDefault(); // change behavior default website
        setName(""); // setelah submit kosongin value
        setMessage(""); // setelah submit kosongin value

        nameInput.current.focus(); // setelah submit akan langsung fokus ke input name

        alert(`Name : ${name}, Message : ${message}`) // tampilkan alert value name dan message
    }

    return (
        <>
            <h1>Guest Book</h1>
            <form >
                <label htmlFor="name">Name</label>
                <br/>
                {/* <GuestBookForm name={name} setName={setName} ref={nameInput}/> gabakal bisa karna component tidak bisa di jadikan reference */}
                <GuestBookForm name={name} setName={setName} ref={nameInput}/> {/* ini baru bisa karna di kirim sebagai props */}
                {/* <input type="text" name="name" ref={nameInput} value={name} onChange={(e) => setName(e.target.value)}/> ambil input value dari name dan masukin ke state setName. dan ref fokus ke element ini karna namInput */}
                <br/>
                <label htmlFor="message">Message</label>
                <br />
                <textarea type="text" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}/> {/* ambil input value dari message dan masukin ke state setMessage */}
                <br />
            </form>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}