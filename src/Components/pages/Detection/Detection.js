// Import css
import './Detection.css';

// Import React module
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

// Import Components
import NavbarAll from "../../Other/Navbar/Navbar";
import FooterAll from "../../Other/Footer/Footer";
import Banner from "../../Other/Banner/Banner";
import Markdown from "../../Other/Markdown/Markdown";
import markdown from './Detection.md';
import background from "../../../assets/Cover.jpg";

const Detection = (props) => {
    const location = useLocation();

    // Scroll to the top every time the location.pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return(
        <div>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner
                        background={background}
                        header="Deep Learning (YOLOv5 + MiDaS)"
                        condition={true}
                        subheader="Settings"
                    />
                    <div className="content-container">
                        <Markdown markdown={markdown}/>
                    </div>
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default Detection;