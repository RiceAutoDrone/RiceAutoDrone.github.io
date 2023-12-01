// Import css
import './Banner.css';

// Import Components
import github from '../../../assets/github.svg';

const Banner = (props) => {
    const { background, header, condition, subheader, main } = props; // Destructure the props to get background and header

    return(
        <div className='image-container'>
            <img src={background} alt="background" />
            <div className='text-container'>
                <h1 className='header'>{header}</h1>
                { condition && (
                    <>
                        <hr className='header-line'/>
                        <h2 className='subheader'>{subheader}</h2>
                        { main && (
                            <a href="./settings" className='button-container'>
                                <img src={github} className="inverse"/>
                                <span>Follow</span>
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Banner;