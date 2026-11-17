import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

// export default function NoteList({notes, onChange, onDelete}){ // OG before context reducer
export default function NoteList(){
    const notes = useContext(NotesContext)
    return (
        <ul>
            {notes.map(note => ( // ambill semua data di dalam object notes
                <li key={note.id}> {/* set key by id di note */}                
                    {/* <Note note={note} onChange={onChange} onDelete={onDelete}/> tampikan component note beserta props nya */}
                    <Note note={note}/>
                </li>
            ))}
        </ul>
    )    
}