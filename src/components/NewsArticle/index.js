import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';
import Text from '../../generic/Text';

const Article = ({title, content}) => (
    <Container background="primaryDark">
        <Heading h1 large color="primaryLight">{title}</Heading>
        <Text justify large spaced>{documentToReactComponents(content.json)}</Text>
    </Container>
)

export default Article;