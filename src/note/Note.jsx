import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

// export default function Note({note, onChange, onDelete}){ // OG before context reducer
export default function Note({note}){
    const dispatch = useContext(NotesDispatchContext)
    const [isEditing, setIsEditing] = useState(false); // set default not editing
    let component; // render component

    // function that handle change text
    function handleChangeText(e){
        // const newNote = {...note, text: e.target.value} // simpan perubahan ke object note dari target value text
        // onChange(newNote) // perbarui
        dispatch({
            ...note, // salin semua data dari note
            type: "CHANGE_NOTE",
            text: e.target.value
        })
    }

    if (isEditing){ // jika kondisi sedanng edit 
        component = ( // render component dengan
            <>
            <input type="text" value={note.text} onChange={handleChangeText} /> {/* element input yang handle perubahan text */}
            <button onClick={() => setIsEditing(false)}>Save</button> {/* dan element button yang menhandle set kondisi editing menjadi false */}
            </>
        )
    } else { // jika kondisi tidak sedang di edit
        component = ( // render component dengan element
            <>
                {note.text}  {/* text isi dari object note */}
                <button onClick={() => setIsEditing(true)} onChange={handleChangeText}>Edit</button> {/* dan button edit dengan mengubah kondisi editing nya menjadi true */}
            </>
        )
    }

    // function yang meng handle note yang sudah selesai
    function handleChangeDone(e){
        // const newNote = {...note, done: e.target.checked} // varibel yang menyimpan kondisi done sebuah note
        // onChange(newNote) // perbarui data
        dispatch({
            ...note, // salin semua data dari note
            type: "CHANGE_NOTE",
            done: e.target.checked
        })
    }

    function handleDelete(){
        dispatch({        
            type: "DELETE_NOTE",
            id: note.id
        })
    }

    return ( // 
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/> {/* checkbox untuk ceklis note yang sudah selesai */}
            {component} {/* tampilkan component */}
            <button onClick={handleDelete}>Delete</button> {/* button delete dengan func handle done */}
        </label>
    )
}