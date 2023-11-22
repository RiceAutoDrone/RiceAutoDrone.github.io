// Import css
import './Flight_Controller.css';

// Import Components
import NavbarAll from "../../../Other/Navbar/Navbar";
import FooterAll from "../../../Other/Footer/Footer";
import Banner from "../../../Other/Banner/Banner";
import Markdown from "../../../Other/Markdown/Markdown";
import markdown from './Flight_Controller.md';
import background from "../../../../assets/Cover.jpg";

const Flight_Controller = (props) => {
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
                    <Markdown markdown={markdown}/>
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default Flight_Controller;