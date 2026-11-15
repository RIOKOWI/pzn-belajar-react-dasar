import Todo from './Todo.jsx'

export default function TodoList(){
    // return (
    //         <ul>
    //             {/* boolean true akan menampilkan text tercoret */}
    //             <Todo isCompleted={true} text="Learn HTML"/>
    //             <Todo isCompleted={true} text="Learn CSS"/>
    //             <Todo isCompleted={true} text="Learn JS"/>
    //             <Todo isCompleted={true} text="Learn Rust" isDeleted={true}/> {/* kalo is deleted true, element tidak akan di tampilkan/null */}
    //             <Todo isCompleted={false} text="Learn React"/>
    //         </ul>
    // )

    const data = [ // membuat array data
        {
            id : 1,
            text : "LEARN Js",
            isCompleted : true,
        },
        {
            id : 2,
            text : "LEARN Html",
            isCompleted : true,
        },
        {
            id : 3,
            text : "LEARN Css",
            isCompleted : true,
        },
        {
            id : 4,
            text : "LEARN React",
            isCompleted : false,
        },
    ]

    // const todos = data.map((todo) => <Todo {...todo}/>) // ambil 1 per satu data di array dan jadikan ke element <Todo>
    // return (
    //     <ul>
    //         {todos} {/* lalu tampilkan data nya satu persatu */}
    //     </ul>
    // )
    
    return ( // best practice
        <ul>
            {data.map((todo) => ( // ambil data 1 per satu dari array bernama data lalu
                <Todo key={todo.id} {...todo}/> // jadikan element dengan key dari object id dan tampilkan 1 per satu
            ))}
        </ul>
    )
}