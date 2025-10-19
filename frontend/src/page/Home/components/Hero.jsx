import './styles/Hero.css'
import { Link } from 'react-router-dom';
function Hero(){


    return(

        <section className="hero">
            <div className="container">
                <h1>Share Your Stories With The World</h1>
                <p>Connect with passionate writers and explore diverse perspectives on topics that matter to you.</p>
                <Link to={'/signup'} className="btn btn-accent">Start Writing Today</Link>
            </div>
        </section>
    )

}

export default Hero;
