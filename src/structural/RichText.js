import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Container from './Container';
import Heading from '../generic/Heading';
import Text from '../generic/Text';

const RichText = ({title, content}) => {
    return (
        <Container background="primaryDark">
            <Heading color="primaryLight">{title}</Heading>
            <Text justify large spaced>{documentToReactComponents(content.json)}</Text>
        </Container>
    )
}

export default RichText;