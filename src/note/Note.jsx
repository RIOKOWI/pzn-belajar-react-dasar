import { useState } from "react";

export default function Note({note, onChange, onDelete}){
    const [isEditing, setIsEditing] = useState(false); // set default not editing
    let component; // render component

    // function that handle change text
    function handleChangeText(e){
        const newNote = {...note, text: e.target.value} // simpan perubahan ke object note dari target value text
        onChange(newNote) // perbarui
    }

    if (isEditing){ // jika kondisi sedanng edit 
        component = ( // render component dengan
            <>
            <input type="text" value={note.text} onnChange={handleChangeText} /> {/* element input yang handle perubahan text */}
            <button onClick={() => setIsEditing(false)}>Save</button> {/* dan element button yang menhandle set kondisi editing menjadi false */}
            </>
        )
    } else { // jika kondisi tidak sedang di edit
        component = ( // render component dengan element
            <>
                {note.text} {/* text isi dari object note */}
                <button onClick={() => setIsEditing(true)}>Edit</button> {/* dan button edit dengan mengubah kondisi editing nya menjadi true */}
            </>
        )
    }

    // function yang meng handle note yang sudah selesai
    function handleChangeDone(e){
        const newNote = {...note, done: e.target.checked} // varibel yang menyimpan kondisi done sebuah note
        onChange(newNote) // perbarui data
    }

    return ( // 
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone}/> {/* checkbox untuk ceklis note yang sudah selesai */}
            {component} {/* tampilkan component */}
            <button onClick={() => onDelete(note)}>Delete</button> {/* button delete dengan func handle done */}
        </label>
    )
}