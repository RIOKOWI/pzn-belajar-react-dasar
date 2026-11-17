import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";


export default function ProfileApp(){
    const [name, setName] = useState("Bob");
    return (
        <>
            {/* <ProfileContext.Provider  value="resbob"> mengubah value dari ProfileContext dan akan di distribusi ke semua yang menggunakan ProfileContext */}
            <ProfileContext.Provider  value={name}> {/* value mengikuti state dari inputan form */}
                <ProfileForm name={name} setName={setName}/> {/* panggil form dan implemen state ke propsnya  */}
                <h1>Profile App</h1>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}