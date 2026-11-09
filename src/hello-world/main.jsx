import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";

import Container from "../container/container";
import MyButton from "../button/MyButton";

createRoot(document.getElementById("root")) // id root untuk di pakai di html nantinya
    .render(
        // <StrictMode></StrictMode> untuk proses development
        <StrictMode> 
            <Container> {/* nested component */}
                <HelloWorld/> {/*  render component HelloWorld yang sudah dibuat tadi */}
                <TodoList/> {/* conditional component */}
                <Table/> {/* strict mode merender ui 2x sehingga variable counter jalan 2x kalo tidak pakai pure component */}
                <AlertButton text="Teken o" message="ancooooook"/>
                <MyButton text="Hit me" onSmash={() => alert("Oucchhhhhhh")}/> {/* onsmash props membuat event handler */}
            </Container>
        </StrictMode>
    )