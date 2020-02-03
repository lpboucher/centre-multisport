import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { useIntl } from 'react-intl';
import Img from 'gatsby-image';
import Lightbox from "react-image-lightbox";

import Container from '../../structural/Container';
import Grid from '../../structural/Grid';
import Flex from '../../structural/Flex';
import ImageWrapper from '../../generic/ImageWrapper';
import Specifications from '../OfferList/Specifications';

import { useGallery } from "../../hooks/use-gallery";

const HoverableContainer = styled(Flex)`
    cursor: pointer;
    &:hover ${Specifications} {
        opacity: 1;
    }

    & > a {
        width: 100%;
        height: 100%;
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
    const [ isLightboxOpen, setLightboxOpen ] = useState(false);
    const [ photoIndex, setPhotoIndex ] = useState(0);
    const { locale } = useIntl();
    const gallery = useGallery({node_locale: [locale], location: [type]});
    return (    
    <Container background={background}>
        <Grid withFeatured>
            {gallery.images.map((img, index) => 
                type === 'index' ?
                    <HoverableContainer key={`${type}-${img.id}`}>
                        <Link to={`/${locale}/gallery`}>
                            <GalleryItem width='100%' height='100%' >
                                    <Img fluid={img.fluid} />
                            </GalleryItem>
                        </Link>
                    </HoverableContainer>
                :
                <HoverableContainer key={`${type}-${img.id}`} onClick={() => {setPhotoIndex(index); setLightboxOpen(true)}}>
                        <GalleryItem width='100%' height='100%' >
                                {img.file.contentType !== 'video/mp4' ?
                                <Img fluid={img.fluid} />
                                : null
                                }
                        </GalleryItem>
                        <ItemDescription justifyCenter alignCenter column>
                            {//img.description
                            }
                            description
                        </ItemDescription>
                </HoverableContainer>
            )}
        </Grid>
        {isLightboxOpen && (
            <Lightbox
                mainSrc={gallery.images[photoIndex].file.url}
                nextSrc={gallery.images[(photoIndex + 1) % gallery.images.length].file.url}
                prevSrc={gallery.images[(photoIndex + gallery.images.length - 1) % gallery.images.length].file.url}
                onCloseRequest={() => setLightboxOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + gallery.images.length - 1) % gallery.images.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + gallery.images.length + 1) % gallery.images.length)}
            />
            )}
    </Container>
)}

export default Gallery;