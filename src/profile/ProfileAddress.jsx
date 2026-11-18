import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";


export default function ProfileAddress(){
    const profile = useContext(ProfileContext) // menggunakan context

    return (
        <>
            <h1>Profile Address</h1>
            <h2>Alamat {profile}</h2> {/* menggunakan variable yang mengandung use context dari ProfileContext */}
        </>
    )
}