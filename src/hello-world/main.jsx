import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "../container/container";

createRoot(document.getElementById("root")) // id root untuk di pakai di html nantinya
    .render(
        // <StrictMode></StrictMode> untuk proses development
        <StrictMode> 
            {/* nested component */}
            <Container>
                {/*  render component HelloWorld yang sudah dibuat tadi */}
                <HelloWorld/>
            </Container>
        </StrictMode>
    )