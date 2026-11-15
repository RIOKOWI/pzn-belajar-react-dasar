import './HelloWorld.css' // import file css


export default function HelloWorld() { // bikin function penamaan nya sesuai dengan nama file & camel case
    const props = { // untuk spread syntax
        text: 'Hello World'
    }
    return ( // mengembalikan element/membuat component
        // <> ini namanya fragment untuk pengganti div membungkus lebih dari 1 element
        // </>
        <div>
            {/* <h1>Hello World</h1>
            <p>gw lagi belajar react</p> */}

            {/* call multiple component */}
            {/* implement props text */}
            {/* <HeaderHelloWorld text="hello world"/>  */}

            {/* implement props text using spread syntax */}
            <HeaderHelloWorld {...props}/> 
            <ParagraphIntro/>
        </div>
    )
}

// create multiple component
function HeaderHelloWorld({text = "kasih text dong"}) { // tambahin param props dengan text
    return (
        // kurung kurawal double buat object
        // <h1 style={{ 
        //     color: "red",
        //     backgroundColor: "black" // wajib pake camelCase
        // }}>{text.toLocaleUpperCase()}</h1> // implement props text ke element
        // cara akses code javascript di jsx
        <h1 className='title'>{text.toLocaleUpperCase()}</h1> // menggunakan className untuk style css 
    )
}

function ParagraphIntro() {
    const text = 'GW LAGI BELAJAR REACT'
    // const style = {
    //     color: "yellow",
    //     backgroundColor: "purple" // wajib pake camelCase
    // }
    return (
        // cara akses code javascript di jsx
        // <p style={style}>{text.toLowerCase()}</p>
        <p className='content'>{text.toLowerCase()}</p> // menggunakan className untuk style css 
    )
}
