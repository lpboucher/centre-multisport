import React from 'react';

import ImageWrapper from '../../generic/ImageWrapper';

const SocialIcon = ({link, width, children}) => {
    return (
            <ImageWrapper height="auto" width={width} margin={"0 1px"}>
                {children}
            </ImageWrapper>
    );
};

export default SocialIcon;