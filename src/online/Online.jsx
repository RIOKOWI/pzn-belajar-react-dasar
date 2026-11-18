import { useOnline } from "./OnlineHook";

export default function Online(){
    const isOnline = useOnline(); // panggil hooks yang udah kita buat 

    return (
        <>
            <h1>
                {isOnline ? "Online" : "Offline"} {/* cek jika state online ? tampilkan text Online : jika tidak tampilkan text Offline*/}
            </h1>
        </>
    )
}