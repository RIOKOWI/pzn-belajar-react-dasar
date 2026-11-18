export default function Product({product}){ // props yang nantinya di kirim via component
    return (
        <div>
            <h1>{product.id} : {product.name}</h1>
            <p>Harga : {product.price}</p>
        </div>
    )
}