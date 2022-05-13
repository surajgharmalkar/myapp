
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";




import BrowserRouter from "react-router-dom/BrowserRouter";

import { Sample } from "./components/Sample";
import { Content } from "./project/Content";
import { Main } from "./project/Main";




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
<Main/>
</BrowserRouter>);


