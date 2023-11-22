// Import css
import './Hardware.css';

// Import Components
import NavbarAll from "../../Other/Navbar/Navbar";
import FooterAll from "../../Other/Footer/Footer";
import Banner from "../../Other/Banner/Banner";
import Markdown from "../../Other/Markdown/Markdown";
import markdown from './Hardware.md';
import background from "../../../assets/Cover.jpg";

const Hardware = (props) => {
    return(
        <div>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner
                        background={background}
                        header="Hardware (Drone)"
                        condition={true}
                        subheader="Settings"
                    />
                    <Markdown markdown={markdown}/>
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default Hardware;