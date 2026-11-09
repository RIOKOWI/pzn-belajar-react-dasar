// TIDAK PURE FUNCTION DAN TIDAK BEST PRACTICE


let counter = 0;

export default function({text}) {
    counter++
    return (
        <tr>
            <td>{counter}</td>
            <td>{text}</td>
        </tr>
    )
}
