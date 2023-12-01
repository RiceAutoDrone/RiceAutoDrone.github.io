// Import css
import './Firmware.css';

// Import Components
import NavbarAll from "../../Other/Navbar/Navbar";
import FooterAll from "../../Other/Footer/Footer";
import Banner from "../../Other/Banner/Banner";
import Markdown from "../../Other/Markdown/Markdown";
import markdown from './Firmware.md';
import background from "../../../assets/Cover.jpg";

const Firmware = (props) => {
    return(
        <div>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner
                        background={background}
                        header="Firmware (Drone control)"
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

export default Firmware;