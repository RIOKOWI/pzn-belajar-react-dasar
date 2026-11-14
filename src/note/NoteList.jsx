import Note from "./Note";

export default function NoteList({notes, onChange, onDelete}){
    return (
        <ul>
            {notes.map(note => ( // ambill semua data di dalam object notes
                <li key={note.id}> {/* set key by id di note */}                
                    <Note note={note} onChange={onChange} onDelete={onDelete}/> {/* tampikan component note beserta props nya */}
                </li>
            ))}
        </ul>
    )    
}