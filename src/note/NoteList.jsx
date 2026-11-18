import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

// export default function NoteList({notes, onChange, onDelete}){ // OG before context reducer
export default function NoteList(){
    const notes = useContext(NotesContext)
    const [search, setSearch] = useState("");
    const searchInput = useRef(null)


    const filteredNotes = useMemo(() => {
        console.info("filtering notes")
        return notes.filter(note => note.text.includes(search)) // kembalikan data dengan inputan user yang sama
    }, [notes, search]) // trigger jika ada data yang berbeda berubah
    
    function handleSearch(){
        console.info("search")
        setSearch(searchInput.current.value) // masukan inputan user ke setSearch
    }

    return (
        <div>
            <input ref={searchInput} placeholder="Search"/>
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredNotes.map(note => ( // ambill semua data di dalam object notes
                    <li key={note.id}> {/* set key by id di note */}                
                        {/* <Note note={note} onChange={onChange} onDelete={onDelete}/> tampikan component note beserta props nya */}
                        <Note note={note}/>
                    </li>
                ))}
            </ul>
        </div>
    )    
}