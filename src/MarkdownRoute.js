// Import React module
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import matter from 'gray-matter';

// Import Components
import MarkdownPage from "./Components/pages/Settings/RaspberryPi/markdown_file/MarkdownPage";

const MarkdownRoute = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [navigation, setNavigation] = useState({ prev: null, next: null });
    const { mdFileName } = useParams(); // Accessing the parameter using useParams
    const navigate = useNavigate();

    useEffect(() => {
        const markdownContext = require.context('./Components/pages/Settings/RaspberryPi/markdown_file', true, /\.md$/);
        const keys = markdownContext.keys();

        const currentIndex = keys.indexOf(`./${mdFileName}.md`);
        const prev = currentIndex > 0 ? keys[currentIndex - 1].replace('./', '').replace('.md', '') : null;
        const next = currentIndex < keys.length - 1 ? keys[currentIndex + 1].replace('./', '').replace('.md', '') : null;

        setNavigation({ prev, next });

        if (mdFileName) {
            import(`./Components/pages/Settings/RaspberryPi/markdown_file/${mdFileName}.md`)
                .then(file => {
                    const { data, content } = matter(file.default);
                    setTitle(data.title || 'Default Title');
                    setSubtitle(data.subtitle || 'Default Subtitle');
                    setContent(content);
                })
                .catch(error => {
                    console.error('Markdown file not found:', error);
                    // Optionally navigate to a 'not found' page or display an error
                });
        }
    }, [mdFileName]);

    return <MarkdownPage
            title={title}
            subtitle={subtitle}
            content={content}
            prev={navigation.prev}
            next={navigation.next}
            onNavigate={navigate}
        />
};

export default MarkdownRoute;
