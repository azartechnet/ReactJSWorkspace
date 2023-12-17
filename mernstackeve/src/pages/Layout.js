import { Outlet,Link } from "react-router-dom";
const Layout=()=>{
    return(
        
      
      <div class="navbar">
        <a class="navbar-brand" href="#">Title</a>
        <ul class="nav navbar-nav">
          <li class="active">
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/blogs">Blogs</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
        <Outlet/>
      </div>
     
      
    )
};
export default Layout;