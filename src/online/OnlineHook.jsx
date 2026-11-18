import { useEffect, useState } from "react";

export function useOnline(){
    const [isOnline, setIsOnline] = useState(true) // state awal true/online

    useEffect(() => {
        function handleOnline(){
            setIsOnline(true) // ubah ke online
        }

        function handleOffline(){
            setIsOnline(false) // ubah ke offline
        }

        window.addEventListener("online", handleOnline) // saat true akan online
        window.addEventListener("offline", handleOffline)  // saat false akan offline

        // clean up
        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    },)

    return isOnline; // return isi state
}