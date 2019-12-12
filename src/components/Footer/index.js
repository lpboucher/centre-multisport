import React from 'react';

import Container from '../../structural/Container';
import Text from '../../generic/Text';

import { useSiteMetaData } from "../../hooks/use-siteMeta"

const Footer = () => {
    const {addressLine, city, postalCode, phone} = useSiteMetaData();
    return (
        <Container background="primaryLight">
            <Text color="primaryDark" small center noMargin>
                {`${addressLine}, ${city}, ${postalCode} | ${phone}`}
            </Text>
            <Text color="primaryDark" small center noMargin>
                Facebook | Instagram
            </Text>
        </Container>
    )
}

export default Footer;