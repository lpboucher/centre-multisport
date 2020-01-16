import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Flex from '../../structural/Flex';
import Heading from '../../generic/Heading';
import Button from '../../generic/Button';

const FilterButton = styled(Button)`
    margin: 15px;
`

const NewsFilter = ({current, categories, pathPrefix}) => {
    return (
        <>
            <Heading h3 center>Filter articles:</Heading>
            <Flex justifyCenter>
                {current !== null &&
                    <FilterButton><Link to={pathPrefix}>All</Link></FilterButton>
                }
                {categories.map(cat => 
                    cat.node.name !== current && 
                    <FilterButton key={`fliter-${cat.node.name}`}>
                        <Link to={`${pathPrefix}/${cat.node.name.toLowerCase()}`}>
                            {cat.node.name}
                        </Link>
                    </FilterButton>
                )}
            </Flex>
        </>
    );
};

export default NewsFilter;