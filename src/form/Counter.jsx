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

    // let [counter, setCounter] = useState(0); // set default value pakai use state yang mengembalikan array nantinya

    // function handleClick(){
    //     setCounter(counter + 1) // increment saat di tekan
    //     console.log(counter); // debug log
    // }
    // return (
    //     <div>
    //         <button onClick={handleClick}> {/* yang menghandle use state */}
    //             Increment
    //         </button>
    //         <h1>Counter : {counter}</h1> {/* state akan di render ulang dan bertambah */}
    //     </div>
    // )


    // PROOF SNAPSHOT
    // let [counter, setCounter] = useState(0);

    // function handleClick(){
    //     setCounter(counter + 1) // 0 + 1
    //     setCounter(counter + 1) // 0 + 1
    //     setCounter(counter + 1) // 0 + 1
    //     // data snapshot di variable counter(0) tidak akan berubah karna konsep snapshot di state itu merender ulang atau membuat snapshot baru
    //     // jadi saat di klik tidak akan +3 karna event ngecek jika ada 1 state sama yang berubah tidak akan di rubah lagi dan akan di render ulang 1x bukan 3x
    //     console.log(counter);
    // }
    // return (
    //     <div>
    //         <button onClick={handleClick}>
    //             Increment +3
    //         </button>
    //         <h1>Counter : {counter}</h1>
    //     </div>
    // )


    let [counter, setCounter] = useState(0);

    console.info(`Return Counter ${counter}`)
    function handleClick(){
        setCounter(c => c + 1) // state update
        setCounter(c => c + 1) // state update
        setCounter(c => c + 1) // state update
        
        
        console.log(counter);
    }
    return (
        <div>
            <button onClick={handleClick}>
                Increment +3
            </button>
            <h1>Counter : {counter}</h1>
        </div>
    )

}