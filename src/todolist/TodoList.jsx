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
            text : "LEARN Js",
            isCompleted : true,
        },
        {
            text : "LEARN Html",
            isCompleted : true,
        },
        {
            text : "LEARN Css",
            isCompleted : true,
        },
        {
            text : "LEARN React",
            isCompleted : false,
        },
    ]

    const todos = data.map((todo) => <Todo {...todo}/>) // ambil 1 per satu data di array dan jadikan ke element <Todo>
    return (
        <ul>
            {todos} {/* lalu tampilkan data nya satu persatu */}
        </ul>
    )
}