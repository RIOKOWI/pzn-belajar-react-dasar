import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


export default function Task(){
    const [items, setItems] = useImmer([]) // membuat default array kosong
    // const [item, setItem] = useState(""); // membuat default object
    


    // function handleChange(e){ 
    //     setItem(e.target.value); // timpa ke data baru
    // }

    // function handleClick(e){
    //     e.preventDefault(); // ubah default browser
    //     setItems((items) => { 
    //         items.push(item);// push value ke array
    //     })
    //     setItem(""); // reset ulang 
    // }


    function handleOnSubmit(item){
        setItems(items => {
            items.push(item);
        });
    }

    return (
        // <div>
        //     <h1>Task</h1>
        //     <form>
        //         <input type="text" onChange={handleChange} value={item}/> {/* target value */}
        //         <button onClick={handleClick}>Add</button> {/* agar value ke push ke array */}
        //     </form>

        //     <h1>List Task</h1>
        //     <ul>
        //         {items.map((item, index) => // ambil semua data di array
        //             <li key={index}>{item}</li> // lalu tampilkan sesuai dengan key dan itemnya
        //         )}
        //     </ul>
        // </div>

        <div>
            <TaskForm onSubmit={handleOnSubmit}/>
            <TaskList items={items}/>
        </div>
    )
}