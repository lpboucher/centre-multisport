import React from 'react';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Form from './Form';

const unEvenWidths = `
    & > ${Container}:first-child {
        width: 66%;
    }

    & > ${Container} {
        width: 33%;
    }
`;

const Contact = (props) => (
    <Container background="primaryDark">
        <Flex css={unEvenWidths}>
            <Container full>
                <Form />
            </Container>
            <Container full>
                <p>one two</p>
            </Container>
        </Flex>
    </Container>
)

export default Contact;