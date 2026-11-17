export default function GuestBookForm({name, setName}){
    return (
        <>
            <label htmlFor="name">Name</label>
            <br/>
            <input type="text" name="name" ref={nameInput} value={name} onChange={(e) => setName(e.target.value)}/>
        </>
    )

}