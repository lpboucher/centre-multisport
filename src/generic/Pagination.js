import React from 'react';
import { FormattedMessage } from 'react-intl';

import Flex from '../structural/Flex';
import MenuLink from '../generic/MenuLink';

const Pagination = ({ category, pathPrefix, currentPage, numPages }) => {
    const urlStart = category ? `${pathPrefix}/${category.toLowerCase()}` : pathPrefix;
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? pathPrefix : `${pathPrefix}/${(currentPage - 1).toString()}`
    const nextPage = `${urlStart}/${(currentPage + 1).toString()}`
    return (
        <Flex justifyBetween>
            {!isFirst ? (
                <MenuLink to={prevPage} rel="prev">
                ← <FormattedMessage id="pagePrevious" />
                </MenuLink>
            ) : <span />}
            {!isLast && (
                <MenuLink to={nextPage} rel="next">
                <FormattedMessage id="pageNext" /> →
                </MenuLink>
            )}
        </Flex>
    );
};

export default Pagination;