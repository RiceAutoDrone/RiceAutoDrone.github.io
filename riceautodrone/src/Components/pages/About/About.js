// Import css
import './About.css';

// Import Components
import NavbarAll from "../../Other/Navbar/Navbar";
import FooterAll from "../../Other/Footer/Footer";
import Banner from "../../Other/Banner/Banner";
import background from "../../../assets/Cover.jpg";

const About = (props) => {
    return(
        <div>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner
                        background={background}
                        header="About Us"
                    />
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default About;