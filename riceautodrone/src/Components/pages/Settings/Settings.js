// Import css
import './Settings.css';

// Import Components
import NavbarAll from '../../Other/Navbar/Navbar';
import FooterAll from "../../Other/Footer/Footer";
import Banner from "../../Other/Banner/Banner";
import background from "../../../assets/Cover.jpg";
import rpi from "../../../assets/raspberrypi.jpg";
import jetson from "../../../assets/jetson.jpg";
import fcu from "../../../assets/flight_controller.jpg";

const Settings = (props) => {
    const base_url = "settings";
    return(
        <>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner background={background} header={"Software Settings"}/>

                    <div className="row">
                        <div className="column col-12 text-center">
                            <h3 className="category">Select a Category</h3>
                        </div>

                        <div className="col mb-4 card-group">
                            <a href={`${base_url}/flight_controller`} className="card-link card">
                                <img className="card-img-top" src={fcu} alt="Flight Controller" />
                                <div className="card-body pt-2">
                                    <h4 className="card-title">Flight Controller</h4>
                                </div>
                            </a>
                            <a href={`${base_url}/raspberrypi`} className="card-link card">
                                <img className="card-img-top" src={rpi} alt="Raspberry Pi" />
                                <div className="card-body pt-2">
                                    <h4 className="card-title">Raspberry Pi</h4>
                                </div>
                            </a>
                            <a href={`${base_url}/jetson`} className="card-link card">
                                <img className="card-img-top" src={jetson} alt="Jetson" />
                                <div className="card-body pt-2">
                                    <h4 className="card-title">Jetson</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <FooterAll />
        </>
    )
}

export default Settings;