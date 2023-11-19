import React from 'react'
import ReactDom from 'react-dom'
import Markdown from 'react-markdown'

import markdown from './settings.md';

ReactDom.render(<Markdown>{markdown}</Markdown>, document.body)