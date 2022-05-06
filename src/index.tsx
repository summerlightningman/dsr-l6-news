import {createRoot} from "react-dom/client";
import App from "./components/app/app";

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(
    <App/>
)