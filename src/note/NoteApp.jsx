import { useImmer } from "use-immer";
import NoteForm from "./NoteForm"
import NoteList from "./NoteList";


let id = 0;
const initialData = [
    {id: id++, text: "Learn Anything", done: true},
    {id: id++, text: "Learn JS", done: false},
    {id: id++, text: "Learn flutter", done: false},
    {id: id++, text: "Learn Dart", done: false},
]


export default function NoteApp(){
    const [notes, setNotes] = useImmer(initialData);

    function handleAddNote(text){
        setNotes(draft => {
            draft.push({
                id: id++,
                text: text,
                done: false
            })
        })
    }

    function handleChangeNote(note){
        setNotes(draft => {
            const index = draft.findIndex(item => item.id === note.id);
            draft[index] = note;
        })
    }
    
    function handleDeleteNote(note){
        setNotes(draft => {
            const index = draft.findIndex(item => item.id === note.id);
            draft.splice(index, 1);
        })
    }


    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote}/>
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote}/>
        </div>
    )

}