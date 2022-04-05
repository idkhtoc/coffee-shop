import { Link } from "react-router-dom";

import './links.css';

const Links = ({color}) => {
    return (
        <nav className="links">
            <img src={`./images/logo-${color}.svg`} alt="logo" className="logo"/> 
            <Link to="/" className="link" style={{color: color}}>Coffee house</Link>
            <Link to="/ourcoffee" className="link" style={{color: color}}>Our coffee</Link>
            <Link to="/forpleasure" className="link" style={{color: color}}>For your pleasure</Link>
        </nav>
    );
}

export default Links;