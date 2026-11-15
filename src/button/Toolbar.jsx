export default function({onClick}) {
    return (
        // goals nya saat di klik tidak ke trigger 2x props nya parent maupun child.
        <div onClick={onClick} style={{ backgroundColor: "red" }}>
            <button onClick={onClick}>1st</button>
            <button onClick={onClick}>2nd</button>
        </div>
    )
}