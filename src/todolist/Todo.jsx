export default function Todo({text, isCompleted}){ // param text untuk mengirim text, dan param isCompleted untuk kondisi boolean
        if(isCompleted) {   // jika kondisi nya true
            return (
                <li>
                    <del>{text}</del> {/* kirim dan coret text todo nya */}
                </li>
            )
        } else { // kalo false
            return (
                <li>
                    {text} {/* kirim text todo nya */}
                </li>
            )
        }
}