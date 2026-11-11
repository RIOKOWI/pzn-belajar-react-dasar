import {useState} from "react"; // import use state
export default function Counter(){
    // let counter = 0; // local variable tidak akan di render ulang

    // function handleClick(){
    //     counter++;
    //                 console.log(counter)
    // }
    // return (
    //     <div>
    //         <button onClick={handleClick}>
    //             Increment
    //         </button>
    //         <h1>Counter : {counter}</h1> {/* akan tetap 0 */}
    //     </div>
    // )
    // diatas contoh code state yang salah

    let [counter, setCounter] = useState(0); // set default value pakai use state yang mengembalikan array nantinya

    function handleClick(){
        setCounter(counter + 1) // increment saat di tekan
        console.log(counter); // debug log
    }
    return (
        <div>
            <button onClick={handleClick}> {/* yang menghandle use state */}
                Increment
            </button>
            <h1>Counter : {counter}</h1> {/* state akan di render ulang dan bertambah */}
        </div>
    )

}