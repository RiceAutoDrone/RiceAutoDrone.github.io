// Import css
import './Flight_Controller.css';

// Import React module
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

// Import Components
import NavbarAll from "../../../Other/Navbar/Navbar";
import FooterAll from "../../../Other/Footer/Footer";
import Banner from "../../../Other/Banner/Banner";
import Markdown from "../../../Other/Markdown/Markdown";
import markdown from './Flight_Controller.md';
import background from "../../../../assets/Cover.jpg";

const Flight_Controller = (props) => {
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
                        header="Flight Controller Settings"
                        condition={true}
                        subheader="How to setup Flight Controller"
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

export default Flight_Controller;