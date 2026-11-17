import { useImmer } from "use-immer";
import NoteForm from "./NoteForm"
import NoteList from "./NoteList";
import { useReducer } from "react";


let id = 0;
const initialData = [
    {id: id++, text: "Learn Anything", done: true},
    {id: id++, text: "Learn JS", done: false},
    {id: id++, text: "Learn flutter", done: false},
    {id: id++, text: "Learn Dart", done: false},
]

function notesReducer(notes, action){ // membuat function notesReducer dengan parameter(state, action object)
    switch(action.type){
        case "ADD_NOTE": // jika case tambah note
            return [ // kembalikan array dengan
                ...notes, // kembalikan data notes yang ada menggunakan spread operator
                { // dan tambah data/objek baru ke array notes dengan data :
                    id: id++, // id increment
                    text: action.text, // text yang di ambil dari object action atau value
                    done: false
                }
            ]
        case "CHANGE_NOTE":
            return notes.map(note => // transformasi notes data yang ada ke dalam notes
                note.id === action.id ? { // cek jika note id sama dengan action id
                    ...note, text: action.text, done: action.done // maka ubah text nya sesuai dengan id nya
            } : note) // jika tidak/kalau bukan kembalikan data nya
        case "DELETE_NOTE":
            return notes.filter(note => note.id !== action.id); // hapus by id
        default: // jika tida ketiga case di atas 
            return notes // kembalikan data yang ada
    }
}


export default function NoteApp(){
    // const [notes, setNotes] = useImmer(initialData);
    const [notes, dispatch] = useReducer(notesReducer, initialData);

    function handleAddNote(text){
        // setNotes(draft => {
        //     draft.push({
        //         id: id++,
        //         text: text,
        //         done: false
        //     })
        // })

        dispatch({
            type: "ADD_NOTE", // pake case yang ada di func reducer
            text: text // ambil isi dari value text
        })
    }

    function handleChangeNote(note){
        // setNotes(draft => {
        //     const index = draft.findIndex(item => item.id === note.id);
        //     draft[index] = note;
        // })
        dispatch({
            ...note,
            type: "CHANGE_NOTE" // pake case yang ada di func reducer
        })
    }
    
    function handleDeleteNote(note){
        // setNotes(draft => {
        //     const index = draft.findIndex(item => item.id === note.id);
        //     draft.splice(index, 1);
        // })
        dispatch({
            type: "DELETE_NOTE", // pake case yang ada di func reducer
            id: note.id // delete by id
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