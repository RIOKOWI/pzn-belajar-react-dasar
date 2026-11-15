// TIDAK PURE COMPONENT DAN TIDAK BEST PRACTICE


// let counter = 0;

// export default function({text}) {
//     counter++
//     return (
//         <tr>
//             <td>{counter}</td>
//             <td>{text}</td>
//         </tr>
//     )
// }



// yang dibawah ini baru pure component
export default function({id, text}) { // jadiin props id aja
    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}