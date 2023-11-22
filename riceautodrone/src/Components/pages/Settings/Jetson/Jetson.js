// Import css
import './Jetson.css';

// Import Components
import NavbarAll from "../../../Other/Navbar/Navbar";
import FooterAll from "../../../Other/Footer/Footer";
import Banner from "../../../Other/Banner/Banner";
import Markdown from "../../../Other/Markdown/Markdown";
import background from "../../../../assets/Cover.jpg";
import markdown from "./Jetson.md";

const Jetson = (props) => {
    return(
        <div>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner
                        background={background}
                        header="Hardware (Embedded systems)"
                        condition={true}
                        subheader="How to setup Jetson"
                    />
                    <Markdown markdown={markdown}/>
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default Jetson;