import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList(){
    const [products, setProducts] = useState([]);
    const loaded = useRef(false) // status awal loaded false

    useEffect(() => {
        if (loaded.current === false){ // cek jika status loaded false maka call dan render data/kalo true tidak usah di call dan render lagi
            fetch('/product.json') // fetch data dari product.json
                .then((response) => response.json()) // lalu parsing response ke json
                .then((data) => setProducts(data)) // lalu render dan masukin data nya ke state
                .then(() => loaded.current = true) // set status loaded ke true agar tidak di render terus menerus
        }
    })

    return (
        <>
            <h1>Product List</h1>
            {/* tampilkan semua data */}
            {products.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </>
    )
}