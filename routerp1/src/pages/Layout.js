import { Outlet, Link } from "react-router-dom";
import  './layout.css';
const Layout = () => {
  return (
     <>
       
          
          <div class="navbar nav1" >
            <a class="navbar-brand" href="#">Title</a>
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
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          
      <Outlet />
     </>
  )
};

export default Layout;