import React from 'react';
import { FormattedMessage } from 'react-intl';

import Heading from '../../generic/Heading';
import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Form from './Form';
import Text from '../../generic/Text';

import { useSiteMetaData } from "../../hooks/use-siteMeta"

const unEvenWidths = `
    & > ${Container}:first-child {
        width: 66%;
    }

    & > ${Container} {
        width: 33%;
    }
`;

const Contact = (props) => {
    const {addressLine, city, postalCode, phone, email} = useSiteMetaData();
    return (
        <Container background={props.background}>
            <Heading h2 large>
                <FormattedMessage id="contactUs" />
            </Heading>
            <Flex css={unEvenWidths}>
                <Container small full>
                    <Form />
                </Container>
                <Container fixPad>
                    <Text small withPad withMargin>{email}</Text>
                    <Text small withPad withMargin>{`${addressLine}, ${city}, ${postalCode}\n${phone}`}</Text>
                    <Text bold uppercase withPad withMargin><FormattedMessage id="openingHours" /></Text>
                    <Text small withPad withMargin>Lundi au Dimanche: 9:00 - 17:00</Text>
                </Container>
            </Flex>
        </Container>
    )
}

export default Contact;