import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';
import Flex from '../../structural/Flex';
import ImageWrapper from '../../generic/ImageWrapper';
import externat from '../../assets/image/externat-logo-175x114.png';
import xollox from '../../assets/image/StudioX2.png';

const LogoLine = ({background, header}) => {
    return (
        <Container background={background}>
            <Heading center h2 large>
                <FormattedMessage id={header} />
            </Heading>
            <Flex justifyAround>
                <ImageWrapper height="100%" width="200px" margin="0">
                    <img src={externat} alt="ext"/>
                </ImageWrapper>
                <ImageWrapper height="100%" width="200px" margin="0">
                    <img src={xollox} alt="xollox"/>
                </ImageWrapper>
            </Flex>
        </Container>
    );
};

export default LogoLine;