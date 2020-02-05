import React from 'react';
import {useIntl} from 'react-intl';
import { FormattedMessage } from 'react-intl';
import Link from 'gatsby-link';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import NewsFilter from './NewsFilter'
import NewsItem from './NewsItem';
import Pagination from '../../generic/Pagination';

import Button from '../../generic/Button';

const NewsList = ({news, pages, isArchive}) => {
    const { locale } = useIntl();
    const backgrounds = ['primaryLight', 'primaryHighlight', 'secondaryHighlight', 'additionalHighlight'];
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
                    isArchive={isArchive}
                />
            )}
            <Pagination pathPrefix={`/${locale}/${isArchive ? 'archive' : 'news'}`} {...pages} />
            {!isArchive && pages.currentPage === pages.numPages &&
            <Flex justifyCenter>
                <Button>
                    <Link to={`${locale}/archive`}>
                        <FormattedMessage id="moreNews" />
                    </Link>
                </Button>
            </Flex>
            }
        </Container>
    )
}

export default NewsList;