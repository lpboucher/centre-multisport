import React from 'react';

import RichText from '../../structural/RichText';

const Article = ({title, content}) => (
    <RichText 
        title={title}
        content={content}
    />
)

export default Article;