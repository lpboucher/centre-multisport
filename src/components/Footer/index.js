import React from 'react';

import Container from '../../structural/Container';
import Text from '../../generic/Text';

import { useSiteMetaData } from "../../hooks/use-siteMeta"

const Footer = () => {
    const {addressLine, city, postalCode, phone} = useSiteMetaData();
    return (
        <Container small background="primaryLight">
            <Text color="primaryDark" small center>
                {`${addressLine}, ${city}, ${postalCode} | ${phone}`}
            </Text>
            <Text color="primaryDark" small center>
                Facebook | Instagram
            </Text>
        </Container>
    )
}

export default Footer;