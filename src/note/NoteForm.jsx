import { useState } from "react";

export default function NoteForm({onAddNote}){
    const [text, setText] = useState("")

    function handleChange(e){ // handle perubahan text
        setText(e.target.value)
    }

    function handleClick(){
        setText("");
        onAddNote(text) // masukan value ke variable text via props
    }

    return (
        <>
            <input type="text" onChange={handleChange} value={text} placeholder="Add Note"/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}