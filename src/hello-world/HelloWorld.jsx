export default function HelloWorld() { // bikin function penamaan nya sesuai dengan nama file & camel case
    return ( // mengembalikan element/membuat component
        // <> ini namanya fragment untuk pengganti div membungkus lebih dari 1 element
        // </>
        <div>
            {/* <h1>Hello World</h1>
            <p>gw lagi belajar react</p> */}

            {/* call multiple component */}
            <HeaderHelloWorld/>
            <ParagraphIntro/>
        </div>
    )
}

// create multiple component
function HeaderHelloWorld() {
    const text = 'Hello World'
    return (
        // kurung kurawal double buat object
        <h1 style={{ 
            color: "red",
            backgroundColor: "black" // wajib pake camelCase
        }}>{text.toLocaleUpperCase()}</h1>
        // cara akses code javascript di jsx
    )
}

function ParagraphIntro() {
    const text = 'GW LAGI BELAJAR REACT'
    const style = {
        color: "yellow",
        backgroundColor: "purple" // wajib pake camelCase
    }
    return (
        // cara akses code javascript di jsx
        <p style={style}>{text.toLowerCase()}</p>
    )
}
