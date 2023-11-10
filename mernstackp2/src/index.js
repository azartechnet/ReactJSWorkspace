import ReactDOM  from "react-dom/client";
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
 import Login from "./pages/login";
// import './pages/login.css';
// import './pages/register.css'
import Register from "./pages/register";
//import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

export default function App()
{
         return(
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
             </Routes>
            </BrowserRouter>
         )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)