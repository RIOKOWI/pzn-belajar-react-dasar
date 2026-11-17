import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

// export default function NoteForm({onAddNote}){ OG before context reducer
export default function NoteForm(){
    const [text, setText] = useState('')
    const dispatch = useContext(NotesDispatchContext)

    function handleChange(e){ // handle perubahan text
        setText(e.target.value)
    }

    function handleClick(){
        setText('');
        dispatch({ // with context
            type: "ADD_NOTE",
            text: text
        })
        // onAddNote(text) // masukan value ke variable text via props
    }

    return (
        <>
            <input type="text" onChange={handleChange} value={text} placeholder="Add Note"/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}