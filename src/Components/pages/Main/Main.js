// Import css
import './Main.css';

// Import React module
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

// Import Components
import NavbarAll from '../../Other/Navbar/Navbar';
import FooterAll from '../../Other/Footer/Footer';
import Banner from "../../Other/Banner/Banner";
import background from '../../../assets/Cover.jpg';
import github from '../../../assets/github.svg';

const Main = (props) => {
    const location = useLocation();

    // Scroll to the top every time the location.pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return(
        <>
            <NavbarAll />
            <section className="main-wrapper landing-page">
                <div className="content-full">
                    <Banner
                        background={background}
                        header="AutoDrone"
                        condition={true} // someCondition should be a boolean
                        subheader="A MECE Capstone Project"
                        main={true}
                    />

                    <div className="text-center">
                        <p className="post-hero spacing">
                            Though current person re-identification techniques which includes using deep convolutional neural networks to focus on Part-Based Models, Graph Neural Networks, Large-Scale Datasets and Pretraining, have improved the traditional methods that rely on static camera view with computer vision to match and identify individuals, they still encounter limitations when in complex scenarios that involve crowded environments, non-uniform lighting conditions, and dynamic camera viewpoints. These challenges lower the accuracy of current solutions and the ability to apply in the real-world. In order to improve the challenges, we aim to integrate autonomous drones into the person re-identification process. By making use of the capabilities of the drone, we expected to outperform traditional methods in terms of both identification accuracy by 10% and adaptability to dynamic environments.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Latest release">
                            <button type="button" className="btn btn-info font-weight-bold" disabled>Latest release</button>
                            <a href="https://github.com/Rice-MECE-Capstone-Projects/Autodrone" className="btn btn-outline-info font-weight-bold">v1.0.1</a>
                        </div>

                        <div className="text-center my-4">
                            <a className="btn btn-info btn-lg my-3 text-white" href="./settings" role="button">Read the docs</a>
                        </div>

                        <div className="image-container-1">
                            <img src={github} alt="github.svg" />
                            <div className='text-container-1'>
                                <h2 className="font-weight-light py-3">Easy to install, Quick configurations</h2>
                                <p className="lead font-weight-light py-2">Download image and install in minutes!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterAll />
        </>
    )
}

export default Main;