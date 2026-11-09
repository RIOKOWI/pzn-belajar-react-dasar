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
        // cara akses code javascript di jsx
        <h1>{text.toLocaleUpperCase()}</h1>
    )
}

function ParagraphIntro() {
    const text = 'GW LAGI BELAJAR REACT'
    return (
        // cara akses code javascript di jsx
        <p>{text.toLowerCase()}</p>
    )
}
