import React from 'react';
import {useIntl} from 'react-intl';

import Container from '../../structural/Container';
import NewsItem from '../News/NewsItem';

import { useNewsItems } from "../../hooks/use-newsItems"

const NewsList = () => {
    const { locale } = useIntl();
    const news = useNewsItems({node_locale: [locale]});
    const backgrounds = ['primaryLight', 'primaryHighlight', 'secondaryHighlight'];
    console.log(news);
    return (
        <Container background="primaryDark">
            {news.map((item, index) =>
                <NewsItem
                    key={item.id}
                    background={backgrounds[index]}
                    title={item.title}
                    excerpt={item.excerpt}
                    featured={item.featuredImage}
                    withPreview
                />
            )}
        </Container>
    )
}

export default NewsList;