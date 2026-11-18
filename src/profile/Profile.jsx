import { useContext } from "react"
import { ProfileContext } from "./ProfileContext"

export default function Profile(){
    const profile = useContext(ProfileContext) // menggunakan context
    
        return (
            <>
                <h1>Profile</h1>
                <h2>halo {profile}</h2> {/* menggunakan variable yang mengandung use context dari ProfileContext */}
            </>
        )    
}
