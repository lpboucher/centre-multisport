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
                <Container small full>
                    <Text small withPad withMargin>{email}</Text>
                    <Text small withPad withMargin>{`${addressLine}, ${city}, ${postalCode}\n${phone}`}</Text>
                    <Text bold uppercase withPad withMargin><FormattedMessage id="openingHours" /></Text>
                    <Text small withPad withMargin noMargin>
                        <FormattedMessage id="weekdays" />
                        <br/>
                        <FormattedMessage id="field" /> : 16 h 30 - 23 h 55
                        <br/>
                        <FormattedMessage id="office" /> : 9 h 00 - 17 h 00
                    </Text>
                    <Text small withPad withMargin noMargin>
                        <FormattedMessage id="weekends" />
                        <br/>
                        <FormattedMessage id="field" /> : 7 h 00 - 23 h 55
                        <br/>
                        <FormattedMessage id="office" /> : <FormattedMessage id="ifRequired" />
                    </Text>
                </Container>
            </Flex>
        </Container>
    )
}

export default Contact;