import Row from "./Row";


export default function Table(){
    return (
        <table border="1">
            <tbody>
                {/* implement code tidak pure component */}
                {/* <Row text="satu"/>
                <Row text="dua"/>
                <Row text="tiga"/> */}


                {/* implement code tidak pure component */}
                <Row id="1" text="satu"/>
                <Row id="2" text="dua"/>
                <Row id="3" text="tiga"/>
            </tbody>
        </table>
    )
}