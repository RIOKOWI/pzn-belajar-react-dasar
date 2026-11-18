import { useRef } from "react";

export default function AlertButton({text, message}) { // membuat component
    const counter = useRef(0) // ref
    function handleClick(e){ // membuat handle function dengan awalan camel case dan handle untuk best practice
        console.info(e);
        // alert(message); // munculkan alert ketika di tekan, custom props di main
        alert(`${message} ${counter.current++}`);
        
    }

    return (
        <button onClick={handleClick}>{text}</button> // kembalikan element button dengan listener handleClick dan props text
    )
}