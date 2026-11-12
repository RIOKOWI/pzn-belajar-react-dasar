import { useState } from "react";
import Counter from "./Counter";


export default function CounterApp(){
    const [show2, setShow] = useState(true)

    function handleChange(e) {
        setShow(e.target.checked)
    }

    return (
        <div>
            <Counter/>
            {show2 && <Counter/>}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Show Counter 2
            {/* jika component di hapus dari page maka state nya juga akan hilang */}
        </div>
    )
}