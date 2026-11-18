import { current } from "immer";
import { useRef, useState } from "react";

export default function Timer(){
    const [start, setStart] = useState(null) // menyimpan waktu awal mulai 
    const [now, setNow] = useState(null) // menyimpan waktu sekarang
    const timer = useRef(null) // untuk menyimpan data timer yang tidak di render ulang

    function handleStart(){
        setStart(Date.now()); // awal mulai diurang
        setNow(Date.now()); // waktu sekarang
        
        // diperbarui tiap
        timer.current = setInterval(() => { // simpan timer ke dalam ref
            setNow(Date.now)
        }, 10) // tiap 10 ms
    }

    function handleStop(){
        clearInterval(timer.current); // clear timer
    }

    return (
        <>
            <h1>Timer : {now - start} ms</h1> {/* waktu sekarang di kurang waktu awal dan di perbarui tiap 10 ms */}
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}