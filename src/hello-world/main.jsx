import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import TodoList from "../todolist/TodoList";
import Container from "../container/container";

createRoot(document.getElementById("root")) // id root untuk di pakai di html nantinya
    .render(
        // <StrictMode></StrictMode> untuk proses development
        <StrictMode> 
            <Container> {/* nested component */}
                <HelloWorld/> {/*  render component HelloWorld yang sudah dibuat tadi */}
                <TodoList/> {/* conditional component */}
            </Container>
        </StrictMode>
    )