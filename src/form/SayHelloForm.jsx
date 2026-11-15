export default function SayHelloForm(){
    function handleClick(e){ // membuat event handler
        e.preventDefault(); // mengubah default browser
        const name = document.getElementById("input_name").value; // ambil value dari element input 
        document.getElementById("text_name").innerText = `Hello ${name}` // get id dan gantikan World dengn nama yang sudah di input
    }

    return (
        <div>
            <form>
                <input id="input_name"/> {/* membuat element input dengan id */}
                <button onClick={handleClick}>Say</button> {/* handle event untuk element button */}
            </form>
            <h1 id="text_name">Hello World</h1> {/* target yang ingin diganti text nya */}
        </div>
    )
}