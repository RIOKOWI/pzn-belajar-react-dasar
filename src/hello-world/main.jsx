import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";

createRoot(document.getElementById("root")) // id root untuk di pakai di html nantinya
    .render(
        // <StrictMode></StrictMode> untuk proses development
        <StrictMode> 
            {/*  render component HelloWorld yang sudah dibuat tadi */}
            <HelloWorld/>
            <HelloWorld/>
            <HelloWorld/>
        </StrictMode>
    )