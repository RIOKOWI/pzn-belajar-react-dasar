import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    // const loaded = useRef(false) // status awal loaded false
    const [load, setLoad] = useState(false) 

    function handleClick(){ // func ubah kondisi load jadi true
        setLoad(true)
    }

    useEffect(() => {
        // if (loaded.current === false){ // cek jika status loaded false maka call dan render data/kalo true tidak usah di call dan render lagi
        //     // console.info("call api")
        //     fetch('/product.json') // fetch data dari product.json
        //         .then((response) => response.json()) // lalu parsing response ke json
        //         .then((data) => setProducts(data)) // lalu render dan masukin data nya ke state
        //         .then(() => loaded.current = true) // set status loaded ke true agar tidak di render terus menerus
        //     }
            
        //     // clean upp effect
        //     return () => {
            //         console.info("Selesai fetch nya")
            //     }

            if (load) { // cek kondisi load true or false
                console.info("Load Data")
                fetch('/product.json') // fetch data dari product.json
                    .then((response) => response.json()) // lalu parsing response ke json
                    .then((data) => setProducts(data)) // lalu render dan masukin data nya ke state        
            }
    }, [load]) // call effect dependency

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Data</button> {/* trigger state load jadi true */}
            {/* tampilkan semua data */}
            {products.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </>
    )
}