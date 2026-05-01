import { useEffect, useState } from "react";
import "../styles/Intro.scss";
function Intro({ onFinish }) {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setTimeout(() => setAnimate(true), 500);
        setTimeout(() => onFinish(), 3500);
    }, [onFinish]);
    return (
        <div className={`intro ${animate ? "zoom" : ""}`}>
            <h1>शांति-एकता-सेवा।</h1>
        </div>
    )
}

export default Intro;