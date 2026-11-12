import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task(){
    const [item, setItem] = useState(""); // membuat default object
    const [items, setItems] = useImmer([]) // membuat default array kosong


    function handleChange(e){ 
        setItem(e.target.value); // timpa ke data baru
    }

    function handleClick(e){
        e.preventDefault(); // ubah default browser
        setItems((items) => { 
            items.push(item);// push value ke array
        })
        setItem(""); // reset ulang 
    }


    return (
        <div>
            <h1>Task</h1>
            <form>
                <input type="text" onChange={handleChange} value={item}/> {/* target value */}
                <button onClick={handleClick}>Add</button> {/* agar value ke push ke array */}
            </form>

            <h1>List Task</h1>
            <ul>
                {items.map((item, index) => // ambil semua data di array
                    <li key={index}>{item}</li> // lalu tampilkan sesuai dengan key dan itemnya
                )}
            </ul>
        </div>
    )
}