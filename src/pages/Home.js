import "../styles/home.scss";
import img1 from "../assets/GPSBuilding.webp";
import img2 from "../assets/GPSStudentImg.webp";
import img3 from "../assets/GPSStudentimg2.webp";
import { useEffect, useState } from "react";
function Home() {
    const images = [img1, img2, img3];
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000)
        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <div className="home">

            <div className="hero"

                style={{ backgroundImage: `url(${images[current]})` }}
            >
                <h1>Welcome to Gayatri Public School</h1>
                <p>Building Future Leaders of Tomorrow</p>
                <button>Apply Now</button>
            </div>
        </div >
    );
}
export default Home;