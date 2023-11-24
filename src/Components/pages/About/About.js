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
import pi from '../../../assets/Member_Image/01_2023_Spring/Eric Lin.jpg'

// ===========================================================================================
// DO NOT MODIFY INFORMATION THAT IS NOT YOUR CURRENT SEMESTER!! IT'S INAPPROPRIATE TO DO SO!!
// ===========================================================================================
const teamMembersBySemester = {
  // More semesters...
  'Fall 2023': [
    // Array of team members for Fall 2023
  ],
  'Spring 2023': [
    // Array of team members for Spring 2023
      { name: "Yu-Che Lin (Eric)", image: '../../../assets/Member_Image/01_2023_Spring/Eric Lin.jpg', location: "Taichung, TW", contact: "" },
      { name: "Shaun Lin"        , image: '../../../assets/Member_Image/01_2023_Spring/Eric Lin.jpg', location: "Taichung, TW", contact: "" },
      { name: "Lucie Bodie"      , image: '../../../assets/Member_Image/01_2023_Spring/Eric Lin.jpg', location: "Taichung, CN", contact: "" },
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
                                        <div className="member-image" style={{ backgroundImage: `url(${member.image})` }} />
                                        <h3>{member.name}</h3>
                                        <p>{member.contact}</p>
                                        <p>{member.location}</p>
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