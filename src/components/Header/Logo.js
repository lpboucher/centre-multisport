import React from 'react';
import Link from 'gatsby-link';
import {useIntl} from 'react-intl';

import ImageWrapper from '../../generic/ImageWrapper';
import logo from '../../assets/image/CDCSR_logotype-coul_seul (1)-1.png'

const Logo = () => {
    const { locale } = useIntl();
    return (
        <Link to={`/${locale}`}>
            <ImageWrapper height="66px" width="93px" margin="-25px 0">
                <img src={logo} alt="logo"/>
            </ImageWrapper>
        </Link>
    );
};

export default Logo;