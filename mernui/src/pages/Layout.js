import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
       <>
        
        <div class="navbar">
            <a class="navbar-brand" href="#">Title</a>
            <ul class="nav navbar-nav">
                <li class="active">
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
                <li>
                    <a href="#">Link</a>
                </li>
            </ul>
        </div>
        
       <Outlet/>
       </>
       
    )
}
export default Layout;