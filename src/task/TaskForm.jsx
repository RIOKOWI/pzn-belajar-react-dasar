import { useState } from "react";


export default function TaskForm({onSubmit}){
    const [item, setItem] = useState(""); // membuat default object

    function handleChange(e){ 
        setItem(e.target.value); // timpa ke data baru
    }

    function handleClick(e){
        e.preventDefault(); // ubah default browser
        onSubmit(item);
        setItem(""); // reset ulang 
    }

    return (
        <div>
            <h1>Task</h1>
            <form>
                <input type="text" onChange={handleChange} value={item}/> {/* target value */}
                <button onClick={handleClick}>Add</button> {/* agar value ke push ke array */}
            </form>
        </div>
    )
}