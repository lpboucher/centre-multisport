import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Container from './Container';
import Heading from '../generic/Heading';
import Text from '../generic/Text';

const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url } = node.data.target.fields.file['fr'];
        console.log()
        return <img style={{width: '100%'}} src={url} />
      }
    }
  };

const RichText = ({title, content}) => {
    return (
        <Container background="primaryDark">
            <Heading large bold color="primaryLight">{title}</Heading>
            <Text justify large>{documentToReactComponents(content.json, options)}</Text>
        </Container>
    )
}

export default RichText;