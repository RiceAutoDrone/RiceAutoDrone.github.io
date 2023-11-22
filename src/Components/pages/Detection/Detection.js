// Import css
import './Detection.css';

// Import Components
import NavbarAll from "../../Other/Navbar/Navbar";
import FooterAll from "../../Other/Footer/Footer";
import Banner from "../../Other/Banner/Banner";
import Markdown from "../../Other/Markdown/Markdown";
import markdown from './Detection.md';
import background from "../../../assets/Cover.jpg";

const Detection = (props) => {
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
                    <Markdown markdown={markdown}/>
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default Detection;