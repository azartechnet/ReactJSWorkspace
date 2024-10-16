import { Outlet,Link } from "react-router-dom";
import './layoutcss.css';
const Layout=()=>{
    return(
        <>
        <center><h1>E-KART APPLICATION SYSTEM</h1></center>
        <div class="navbar nav1">
            <a class="navbar-brand" href="#">E-KART</a>
            <ul class="nav navbar-nav">
                <li class="active">
                   <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/Register">Register</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
        
        <Outlet/>
        </>
    )
}

export default Layout;