// Import css
import './Main.css';

// Import React module
import Image from 'react-bootstrap/Image';

// Import Components
import NavbarAll from '../../Other/Navbar/Navbar';
import background from './Cover.jpg';


const Main = (props) => {
    return(
        <>
            <NavbarAll />
            <article className='article'>
                <img className='image' src={background} alt="background" />
                <h1 className='header'>AutoDrone</h1>
            </article>

            <div className="center-text">
                <p className="post-hero center-text spacing">
                    The objective of the project is an automated drone for making up the high colony loss rate of the honeybee population. A high colony loss rate will indirectly affect the growth of many crops. The drone must be able to detect flowers and be able to move closer in all 3 dimensions(altitude, latitude). It will also have to extend a robotic arm to polish the flower.
                </p>
            </div>

            <div className="center-text">
                <p className="post-hero center-text spacing">
                    The objective of the project is an automated drone for making up the high colony loss rate of the honeybee population. A high colony loss rate will indirectly affect the growth of many crops. The drone must be able to detect flowers and be able to move closer in all 3 dimensions(altitude, latitude). It will also have to extend a robotic arm to polish the flower.
                </p>
            </div>

            <div className="text-center">
                <div className="btn-group btn-group-sm" role="group" aria-label="Latest release">
                    <button type="button" className="btn btn-info font-weight-bold" disabled>Latest release</button>
                    <a href="https://github.com/Rice-MECE-Capstone-Projects/Autodrone" className="btn btn-outline-info font-weight-bold">v1.0.1</a>
                </div>

                <div className="text-center my-4">
                    <a className="btn btn-info  btn-lg my-3 text-white" href="./settings" role="button">Read the docs</a>
                </div>

                <div className="text-center my-4 py-5 px-3 bg-primary rounded-lg chulapa-overlay-img">
                    <p><i className="fas fa-rocket fa-3x"></i></p>
                    <h2 className="font-weight-light py-3">Easy to install, Quick configurations</h2>
                    <p className="lead font-weight-light py-2">Download image and install in minutes!</p>
                </div>
            </div>
        </>
    )
}

export default Main;