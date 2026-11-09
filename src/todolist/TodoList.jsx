import Todo from './Todo.jsx'

export default function TodoList(){
    return (
            <ul>
                {/* boolean true akan menampilkan text tercoret */}
                <Todo isCompleted={true} text="Learn HTML"/>
                <Todo isCompleted={true} text="Learn CSS"/>
                <Todo isCompleted={true} text="Learn JS"/>
                <Todo isCompleted={false} text="Learn React"/>
            </ul>
    )
}