// Import css
import './Markdown.css';

// Import React module
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const CodeBlock = ({ value }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Remove copied message after 2 seconds
            }, (err) => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="code-block">
            <pre><code>{value}</code></pre>
            <button onClick={() => copyToClipboard(value)} className="copy-button">
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

const Markdown = (props) => {
    const { markdown } = props;
    return(
        <div className="markdown-container">
            <ReactMarkdown
                children={markdown}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]} // To render image in html form
                components={{
                    // Customize the rendering of code blocks
                    code({node, inline, className, children, ...props}) {
                        return !inline
                            ? (
                            <CodeBlock value={String(children).replace(/\n$/, '')} {...props} />
                            )
                            : (
                                <code className={"inline-code"} {...props}>
                                    {children}
                                </code>
                            );
                    }
                }}
            />
        </div>
    )
}


export default Markdown;