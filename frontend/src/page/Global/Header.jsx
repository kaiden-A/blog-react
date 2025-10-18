import './styles/Header.css';


function Header(){

    return(

        <header>
            <div className="container">
                <nav className="navbar">
                    <a href="index.html" className="logo">Blog<span>Hub</span></a>
                    <ul className="nav-links">
                        <li><a href="index.html">Home</a></li>
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