import { Outlet, Link } from 'react-router-dom';
import './layout.css';
const Layout = () => {
    return (
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Contact" class="nav-link">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Blogs" class="nav-link">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/NoPage" class="nav-link">NoPage</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;