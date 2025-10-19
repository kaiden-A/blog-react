import './styles/Header.css';
import { Link } from 'react-router-dom';

function Header(){

    return(

        <header>
            <div className="container">
                <nav className="navbar">
                    <Link to={'/'} className="logo">Blog<span>Hub</span></Link>
                    <ul className="nav-links">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#" className="btn">Sign Up</a></li>
                    </ul>
                    <div className="hamburger">☰</div>
                </nav>
            </div>
        </header>
    )

}
export default Header;