export default function ProfileForm({name, setName}){ // set 2 props

    function handleChange(e){ // handle pergantian name sesua inputan value
        setName(e.target.value)
    }


    return (
        <>
            <h2>Profile Form</h2>
            <input type="text" text={name} onChange={handleChange}/> {/* implemen props dan func ke element */}
        </>
    )
    
}