export default function AlertButton({text, message}) { // membuat component
    function handleClick(){ // membuat handle function dengan awalan camel case dan handle untuk best practice
        alert(message); // munculkan alert ketika di tekan, custom props di main
    }

    return (
        <button onClick={handleClick}>{text}</button> // kembalikan element button dengan listener handleClick dan props text
    )
}