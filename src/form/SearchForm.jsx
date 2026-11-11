export default function SearchForm(){
    return (
        <form >
            <input type="text" />
            <button type="submit" onClick={(e) => {
                e.preventDefault(); // untuk menghindari perlaku default browser, jadi default browser me reload atau submit form
                alert("You search")
            }}>Klik</button>
        </form>
    )
}