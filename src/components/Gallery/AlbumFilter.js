import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import Flex from '../../structural/Flex';
import Heading from '../../generic/Heading';
import Button from '../../generic/Button';

const FilterButton = styled(Button)`
    margin: 15px;
`

const AlbumFilter = ({albums, isAlbum, pathPrefix, current}) => {
    return (
        <>
            <Heading h3 center noMargin>
                <FormattedMessage id="albumFilter" />
            </Heading>
            <Flex justifyCenter>
                {isAlbum &&
                    <FilterButton><Link to={pathPrefix}><FormattedMessage id="all" /></Link></FilterButton>
                }
                {albums.map(({node}) => 
                    <>
                        {current !== node.slug &&
                        <FilterButton key={`filter-${node.label}`}>
                            <Link to={`${pathPrefix}/${node.slug}`}>
                                {node.label}
                            </Link>
                        </FilterButton>
                        }
                    </>
                )}
            </Flex>
        </>
    );
};

export default AlbumFilter;