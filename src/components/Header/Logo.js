import React from 'react';
import Link from 'gatsby-link';
import {useIntl} from 'react-intl';

const Logo = () => {
    const { locale } = useIntl();
    return (
        <h1>
            <Link to={`/${locale}`}>Centre Multisport</Link>
        </h1>
    );
};

export default Logo;