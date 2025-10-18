import './styles/Footer.css'
function Footer(){


    return(
        
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>About BlogHub</h3>
                        <p>BlogHub is a platform for writers and readers to connect through meaningful stories and diverse perspectives.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Discover</a></li>
                            <li><a href="#">Categories</a></li>
                            <li><a href="#">Popular Writers</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Categories</h3>
                        <ul className="footer-links">
                            <li><a href="#">Travel</a></li>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Health & Wellness</a></li>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Lifestyle</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Connect With Us</h3>
                        <ul className="footer-links">
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Newsletter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2023 BlogHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;