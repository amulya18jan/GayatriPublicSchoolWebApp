import { Link } from "react-router-dom";
import "../../src/styles/nav.scss";
import logo from "../assets/GPSLOGO.png"
function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Gayatri Public School Logo" />
                <h2>GAYATRI PUBLIC SCHOOL</h2>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About-Us</Link>
                <Link to="/admission">Admission</Link>
                <Link to="/contact">Contact-Us</Link>
            </div>
            <div className="logo-containerr-right">
                <img className="right-side-logo" src={logo} alt="Gayatri Public School Logo" />
            </div>
        </nav>

    );
}
export default Navbar;