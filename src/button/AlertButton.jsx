export default function AlertButton({text}) { // membuat component
    function handleClick(){ // membuat handle function dengan awalan camel case dan handle untuk best practice
        alert("Jampuuuuuuuuuuut"); // munculkan alert ketika di tekan
    }

    return (
        <button onClick={handleClick}>{text}</button> // kembalikan element button dengan listener handleClick dan props text
    )
}