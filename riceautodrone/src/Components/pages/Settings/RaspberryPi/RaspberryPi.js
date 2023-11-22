// Import css
import './RaspberryPi.css';

// Import Components
import NavbarAll from "../../../Other/Navbar/Navbar";
import FooterAll from "../../../Other/Footer/Footer";
import Banner from "../../../Other/Banner/Banner";
import background from "../../../../assets/Cover.jpg";

const RaspberryPi = (props) => {
    return(
        <div>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner
                        background={background}
                        header="Raspberry Pi Settings"
                        condition={true}
                        subheader="Setting Instructions"
                    />
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default RaspberryPi;