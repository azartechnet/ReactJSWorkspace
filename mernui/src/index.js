import React from "react";
import Layout from "./pages/Layout";
import ReactDOM  from "react-dom/client";
import Home from  "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";


export default function App()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index  element={<Home/>}/>
            <Route path="/register/*" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)