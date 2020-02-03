import React from 'react';

import ImageWrapper from '../../generic/ImageWrapper';

const SocialIcon = ({link, width, children}) => {
    return (
        <a href={`${link}`}>
            <ImageWrapper height="auto" width={width} margin={"0 5px"}>
                {children}
            </ImageWrapper>
        </a>
    );
};

export default SocialIcon;