import React from 'react';
import Link from 'gatsby-link';
import {useIntl} from 'react-intl';

import ImageWrapper from '../../generic/ImageWrapper';
import logo from '../../assets/image/CDCSR Logo.png'

const Logo = () => {
    const { locale } = useIntl();
    return (
        <Link to={`/${locale}`}>
            <ImageWrapper height="auto" width="120px" margin="auto">
                <img src={logo} alt="logo"/>
            </ImageWrapper>
        </Link>
    );
};

export default Logo;