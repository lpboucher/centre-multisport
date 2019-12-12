import React from 'react';
import Link from 'gatsby-link';

const Logo = ({locale}) => {
    return (
        <h1>
            <Link to={`/${locale.langKey}`}>Centre Multisport</Link>
        </h1>
    );
};

export default Logo;