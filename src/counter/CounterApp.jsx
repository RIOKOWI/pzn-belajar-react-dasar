import { useState } from "react";
import Counter from "./Counter";


export default function CounterApp(){
    const [show2, setShow] = useState(true)

    function handleChange(e) {
        setShow(e.target.checked)
    }

    return (
        <div>
            {/* <Counter/>
            {show2 && <Counter/>} */}
            {/* {show2 ? <Counter name="kowi"/> : <Counter name="rio"/>} kenapa counter 1 & 2 state nya gak kereset saat component nya hilang? karna posisi component nya sama maka react tidak akan mereset */}
            {/* {show2 ? <Counter name="kowi"/> : <p>Hilang</p>} reset state dengan cara change element */}

            {/* reset state component */}
            {/* {show2 ? (
                <div>
                    <Counter name="kowi"/>
                </div>
                ) : // jika checked tampilkan component/element div jika tidak tampilkan section
                (
                    <section>
                        <Counter name="jow"/> 
                    </section>    
                )} */}

            {/* posisinya berbeda */}
            {/* {!show2 && <Counter name="kowi"/>} 
            {show2 && <Counter name="rio"/>} */}

            {/* using key best practice */}
            {show2 ? <Counter key="1" name="rio"/> : <Counter key="2" name="kowi"/>}
            
            <input type="checkbox" checked={show2} onChange={handleChange} /> Show Counter 2
            {/* jika component di hapus dari page maka state nya juga akan hilang */}
        </div>
    )
}