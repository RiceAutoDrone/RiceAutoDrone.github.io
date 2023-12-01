// Import css
import './MarkdownPage.css';

// Import React module
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import Components
import NavbarAll from "../../../../Other/Navbar/Navbar";
import FooterAll from "../../../../Other/Footer/Footer";
import Banner from "../../../../Other/Banner/Banner";
import Markdown from "../../../../Other/Markdown/Markdown";
import background from "../../../../../assets/Cover.jpg";

const MarkdownPage = ({ title, subtitle, content, prev, next }) => {
    const location = useLocation();

    // Scroll to the top every time the location.pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div>
            <NavbarAll />
            <section className="main-wrapper">
                <div className="content-full">
                    <Banner
                        background={background}
                        header={title}
                        condition={true}
                        subheader={subtitle}
                    />
                    <div className="content-container">
                        <Markdown markdown={content}/>
                        <div className="navigation-buttons">
                            {prev ? (
                                <Link to={`/settings/raspberrypi/${prev}`} className="prev-button">
                                    <button>&lt; {prev.replace('_', ' ')}</button>
                                </Link>
                            ) : (
                                <div className="placeholder-button"></div>  // Placeholder to maintain layout
                            )}
                            {next && (
                                <Link to={`/settings/raspberrypi/${next}`} className="next-button">
                                    <button>{next.replace('_', ' ')} &gt;</button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <FooterAll />
        </div>
    );
};

export default MarkdownPage;