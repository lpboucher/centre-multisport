import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import { device } from '../../theme';

import Container from '../../structural/Container';
import RichText from '../../structural/RichText';
import ImageGallery from './ImageGallery';
import MenuLink from '../../generic/MenuLink';

const BackLink = styled(MenuLink)`
    @media ${device.laptop} {
        font-size: 100%;
        padding: 1rem 1rem 0;
    }
`
const Wrapper = styled.div`
    padding: 10px 0;
`

const Article = ({title, content, gallery, date}) => {
    const { locale } = useIntl();
    return (
        <>
            <Container background="primaryDark">
                <RichText 
                    title={title}
                    content={content}
                    date={date}
                />
                <Wrapper>
                    <BackLink to={`/${locale}/news`} rel="prev">← <FormattedMessage id="backToNews" /></BackLink>
                </Wrapper>
            </Container>
            {gallery && gallery.length > 0 &&
            <ImageGallery images={gallery} />
            }
        </>
    )
}

export default Article;