import React from 'react';
import {useIntl} from 'react-intl';

import Container from '../../structural/Container';
import NewsFilter from './NewsFilter'
import NewsItem from './NewsItem';
import Pagination from '../../generic/Pagination';

import { useNewsItems } from "../../hooks/use-newsItems"

const NewsList = ({news, pages, categories}) => {
    const { locale } = useIntl();
    //const news2 = useNewsItems({node_locale: [locale]});
    const backgrounds = ['primaryLight', 'primaryHighlight', 'secondaryHighlight'];
    return (
        <Container background="primaryDark">
            {//<NewsFilter current={pages.category} categories={categories} pathPrefix={`/${locale}/news`}/>
            }
            {news.map((item, index) =>
                <NewsItem
                    key={item.node.id}
                    background={backgrounds[index]}
                    newsItem={item.node}
                    isLight={backgrounds[index] === 'primaryLight'}
                    withPreview
                />
            )}
            <Pagination pathPrefix={`/${locale}/news`} {...pages} />
        </Container>
    )
}

export default NewsList;