export default function Container({children}) { // membuat func dengan param children untuk nested components
    return (
        <>
        <h1>Rio Achyar</h1>
        {children}
        <footer>
            <p>@Copyright Rio Achyar 2026</p>
        </footer>
        </>
    )
}