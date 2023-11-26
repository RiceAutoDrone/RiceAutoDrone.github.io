// Import css
import './About.css';

// Import React module
import {useLocation} from "react-router-dom";
import React, {useEffect} from "react";

// Import Components
import NavbarAll from "../../Other/Navbar/Navbar";
import FooterAll from "../../Other/Footer/Footer";
import Banner from "../../Other/Banner/Banner";
import background from "../../../assets/Cover.jpg";
import linkedIn from "../../../assets/LinkedIn-Wordmark-White-Logo.wine.svg";

// ===========================================================================================
// DO NOT MODIFY INFORMATION THAT IS NOT YOUR CURRENT SEMESTER!! IT'S INAPPROPRIATE TO DO SO!!
// ===========================================================================================
const teamMembersBySemester = {
    // More semesters...
    'Fall 2023': [
        // Array of team members for Fall 2023
        { name: "Yu-Che (Eric) Lin"   , image: require('../../../assets/Member_Image/02_2023_Fall/Eric_Lin.jpg'), location: "Taichung, TW", contact: "https://www.linkedin.com/in/eric2678/" },
        { name: "Zi-Kang (Karl) Sheng", image: require('../../../assets/Member_Image/02_2023_Fall/placeholder.jpg'), location: "Shanghai, CN", contact: "https://www.linkedin.com/in/zikang-sheng-682a73149/" },
        { name: "Ze-Ning Li"          , image: require('../../../assets/Member_Image/02_2023_Fall/placeholder.jpg'), location: ", CN", contact: "https://www.linkedin.com/in/zening-li-20074a177/" },
        { name: "Yi-Han Hong"         , image: require('../../../assets/Member_Image/02_2023_Fall/Yihan.jpg'), location: "Suzhou, CN", contact: "https://www.linkedin.com/in/yihanh/" },
    ],

    'Spring 2023': [
        // Array of team members for Spring 2023
        { name: "Yu-Che (Eric) Lin"    , image: require('../../../assets/Member_Image/01_2023_Spring/Eric_Lin.jpg'), location: "Taichung, TW", contact: "https://www.linkedin.com/in/eric2678/" },
        { name: "Hsuan-You (Shaun) Lin", image: require('../../../assets/Member_Image/01_2023_Spring/placeholder.jpg'), location: "Taichung, TW", contact: "https://www.linkedin.com/in/hsuanyou-lin/" },
        { name: "Zi-Kang (Karl) Sheng" , image: require('../../../assets/Member_Image/01_2023_Spring/placeholder.jpg'), location: "Shanghai, CN", contact: "https://www.linkedin.com/in/zikang-sheng-682a73149/" },
    ],
};
// ===========================================================================================
// DO NOT MODIFY INFORMATION THAT IS NOT YOUR CURRENT SEMESTER!! IT'S INAPPROPRIATE TO DO SO!!
// ===========================================================================================

const About = (props) => {
    const location = useLocation();

    // Scroll to the top every time the location.pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return(
        <div>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner
                        background={background}
                        header="About Us"
                    />
                    {Object.entries(teamMembersBySemester).map(([semester, members]) => (
                        <div className="team-section">
                            <h2 className="team-section-title">{semester}</h2>
                            <div className="team-members-container">
                                {members.map(member => (
                                    <div className="team-member" key={member.name}>
                                        <div className="member-image-container">
                                            <img src={member.image} alt={member.name} className="member-image"/>
                                        </div>
                                        <div className="member-details">
                                            <h3>{member.name}</h3>
                                            <p>{member.location}</p>
                                            {member.contact && (
                                                <div className="linkedin-button-container">
                                                    <a href={member.contact} target="_blank" rel="noopener noreferrer" className="linkedin-button">
                                                        <img
                                                            className="linkedin-logo"
                                                            src={linkedIn}
                                                            alt={`${member.name} LinkedIn`}
                                                        />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default About;