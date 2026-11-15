// import { useState } from "react"
import { useImmer } from "use-immer"

const initialData = { // set initial/default data
    name : "",
    message : "",
}

export default function ContactForm(){
    // WITHOUT IMMER
    // let [contact, setContact] = useState(initialData) // membuat usesate untuk initial data
    
    // function handleNameChange(e){ // func untuk handle perubahan nama dengan param event e
    //     setContact({ // trigger render ulang
    //         // lalu timpa dengan object baru
    //         ...contact, // update data baru
    //         name: e.target.value // dengan value baru dari inputan
    //     })
    // } 

    // function handleMessageChange(e){
    //     setContact({ // trigger render ulang
    //         // lalu timpa dengan object baru
    //         ...contact,
    //         message: e.target.value
    //     })
    // } 

    // WITH IMMER
    let [contact, setContact] = useImmer(initialData) // membuat usesate untuk initial data
    
    function handleNameChange(e){ 
        setContact(contact => 
            {contact.name = e.target.value})
    } 
    
    function handleMessageChange(e){ 
        setContact(contact => 
            {contact.message = e.target.value})
    } 

    return (
        <div>
            <h1>Contact Form</h1>
            <form >
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} /> {/* value nya menjadi target yang di handleNameChange */}
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChange} /> {/* value nya menjadi target yang di handleMessageChange */}
            </form>
            <h1>Contact detail</h1>
            <p>Name: {contact.name}</p> {/* tampilkan data nama */}
            <p>Message: {contact.message}</p> {/* tampilkan data pesa */}
        </div>
    )
}