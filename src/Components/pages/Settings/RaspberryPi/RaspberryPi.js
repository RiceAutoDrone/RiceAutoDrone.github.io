// Import css
import './RaspberryPi.css';

// Import React module
import {Link, useLocation} from 'react-router-dom';
import {useEffect} from "react";
import matter from 'gray-matter';

// Import Components
import NavbarAll from "../../../Other/Navbar/Navbar";
import FooterAll from "../../../Other/Footer/Footer";
import Banner from "../../../Other/Banner/Banner";
import background from "../../../../assets/Cover.jpg";

function importMarkdowns(markdownModule) {
    return markdownModule.keys().map((key) => {
        // Import the markdown content
        const markdownContent = markdownModule(key);

        // // Logging to inspect the imported content
        // console.log(`Filename: ${key}`, markdownContent);

        const rawContent = markdownContent.default; // Rename to avoid conflict

        // Check if the imported content is a string
        if (typeof rawContent !== 'string') {
            console.error(`Content of ${key} is not a string.`);
            return null;
        } else {
            // console.log(`Raw Content: ${rawContent}`);
        }

        // Parse the front matter
        try {
            const { data, content } = matter(rawContent); // Use the raw content here

            return {
                path: `/settings/raspberrypi/${key.replace('./', '').replace('.md', '')}`,
                title: data.title || 'Default Title', // Use the title from the front matter
                subtitle: data.subtitle || '',
                excerpt: data.excerpt || '',
                content: content, // The parsed content without front matter
                date: data.date || 'Unknown Date', // Replace with actual date if available
                // Add other metadata as needed
            };
        } catch (error) {
            console.error(`Error parsing front matter of ${key}:`, error);
            return null;
        }
    }).filter(Boolean); // Filter out any null values
}

const RaspberryPi = (props) => {
    const location = useLocation();

    // Scroll to the top every time the location.pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Use require.context to load Markdown files at build time
    const linkData = importMarkdowns(require.context('!raw-loader!./markdown_file', true, /\.md$/));
    // Reverse the sequence of linkData
    const reversedLinkData = [...linkData].reverse();

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
                    {/* Here we will map over the linkData to create the cards */}
                    <div className="content-container">
                        <div className="settings-links">
                            {reversedLinkData.map((link, index) => (
                                <Link to={link.path} key={index} className="settings-link-card">
                                    <h3>{link.title}</h3>
                                    <p>{link.excerpt}</p>
                                    <p>{link.date}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <FooterAll />
        </div>
    )
}

export default RaspberryPi;