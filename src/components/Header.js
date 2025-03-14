import{Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Alex Durling Portfolio</Link>

                    <div className="collapseNavbar" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="navItem me-3">
                                <Link to="/" className="navLink">Home</Link>
                            </li>
                            <li className="navItem me-3">
                                <Link to="/about" className="navLink">About</Link>
                            </li>
                            <li className="navItem me-3">
                                <Link to="/projects" className="navLink">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;