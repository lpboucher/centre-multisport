import React from 'react';

import Container from '../../structural/Container';
import NewsItem from '../News/NewsItem';

const ArticlesList = () => {
    return (
        <Container background="primaryDark">
            <NewsItem withPreview/>
        </Container>
    )
}

export default ArticlesList;