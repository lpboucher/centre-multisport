import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import Img from 'gatsby-image';

import Container from '../../structural/Container';
import Grid from '../../structural/Grid';
import Flex from '../../structural/Flex';
import ImageWrapper from '../../generic/ImageWrapper';
import Specifications from '../OfferList/Specifications';

import { useGallery } from "../../hooks/use-gallery";

const HoverableContainer = styled(Flex)`
    &:hover ${Specifications} {
        opacity: 1;
    }
`
const GalleryItem = styled(ImageWrapper)`
    & > div {
        height: 100%;
    }
`
const ItemDescription = styled(Specifications)`
    background: ${({theme}) => theme.primaryDark};
    color: white;
    left: 0;
    bottom: 0;
    top: auto;
    height: initial;
    padding: 10px;
    border-radius: 0;
`

const Gallery = ({background, type}) => {
    const { locale } = useIntl();
    const gallery = useGallery({node_locale: [locale], location: [type]});
    return (    
    <Container background={background}>
        <Grid withFeatured>
            {gallery.images.map(img => 
                <HoverableContainer key={`${type}-${img.id}`}>
                    <GalleryItem width='100%' height='100%' >
                        <Img fluid={img.fluid} />
                    </GalleryItem>
                    <ItemDescription justifyCenter alignCenter column>
                        {//img.description
                        }
                        description
                    </ItemDescription>
                </HoverableContainer>
            )}
        </Grid>
    </Container>
)}

export default Gallery;