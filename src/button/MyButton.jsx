export default function MyButton({text, onSmash}) { // membuat component dengan props
    return (
        <button onClick={onSmash}>{text}</button> // kembalikan element button dengan listener handleClick dan props text
    )
}