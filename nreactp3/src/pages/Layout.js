import {Outlet,Link} from 'react-router-dom'
import  './layout.css';
const Layout=()=>{
    return(
      
        <>
        <center><h3>E-KartApplication</h3></center>
        <img src="" alt="" />
          <div class="navbar d1">
            
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
                <li>
                <Link to="/nopage">NoPage</Link>
                </li>
            </ul>
        </div>
        <Outlet/>
    
        </>
      
       
    )
};

export default Layout;