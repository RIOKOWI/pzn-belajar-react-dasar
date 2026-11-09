import Row from "./Row";


export default function Table(){
    return (
        <table border="1">
            <tbody>
                {/* implement code tidak pure function */}
                <Row text="satu"/>
                <Row text="dua"/>
                <Row text="tiga"/>
            </tbody>
        </table>
    )
}