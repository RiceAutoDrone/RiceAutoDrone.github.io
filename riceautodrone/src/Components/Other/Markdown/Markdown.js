// Import css
import './Markdown.css';

// Import React module
import ReactMarkdown from 'react-markdown';

const Markdown = (props) => {
    const { markdown } = props;
    return(
        <>
            <div className="text-center">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </>
    )
}

export default Markdown;