import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
       <>
        
        <div className="navbar">
            <a className="navbar-brand" href="#">Title</a>
            <ul className="nav navbar-nav">
                <li className="active">
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Login">Login</Link>
                </li>
                <li>
                <Link to="/Register">Register</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
        </div>
        
       <Outlet/>
       </>
       
    )
}
export default Layout;