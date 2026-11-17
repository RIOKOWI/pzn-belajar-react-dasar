import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

export default function ProfileApp(){
    return (
        <>
            <ProfileContext.Provider  value="resbob"> {/* mengubah value dari ProfileContext dan akan di distribusi ke semua yang menggunakan ProfileContext */}
                <h1>Profile App</h1>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}