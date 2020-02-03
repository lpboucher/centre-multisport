import React from 'react';
import Link from 'gatsby-link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { FormattedDate, useIntl } from 'react-intl';

import Container from './Container';
import Heading from '../generic/Heading';
import Text from '../generic/Text';

const imgStyle = {
  width: '100%',
  height: '100%',
  maxWidth: '960px',
  maxHeight: '400px',
  objectFit: 'cover',
  marginBottom: '40px'
}

const createOptions = (locale) => {
  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { url } = node.data.target.fields.file['fr'];
        return <Link to={`/${locale}/gallery`}><img style={imgStyle} src={url} /></Link>
      }
    }
  }
}

const RichText = ({title, content, date}) => {
    const { locale } = useIntl();
    const options = createOptions(locale);
    return (
        <Container background="primaryDark">
            <Heading large bold color="primaryLight">{title}</Heading>
            {date &&
            <Text justify large>
              <FormattedDate value={date} day="numeric" month="long" year="numeric"/>
            </Text>
            }
            <Text justify large>{documentToReactComponents(content.json, options)}</Text>
        </Container>
    )
}

export default RichText;