
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";





import BrowserRouter from "react-router-dom/BrowserRouter";


import { Main } from "./project/Main";
import { Sample } from "./components/Sample";




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
<Main/>
</BrowserRouter>);


