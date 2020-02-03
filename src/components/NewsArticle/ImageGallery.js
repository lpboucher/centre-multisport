import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from "react-image-lightbox";
import Img from 'gatsby-image';

import Flex from '../../structural/Flex';
import ImageWrapper from '../../generic/ImageWrapper';
import Specifications from '../OfferList/Specifications';


const GalleryItem = styled(ImageWrapper)`
    position: relative;
    cursor: pointer;
    & > div:first-child {
        height: 100%;
    }

    &:hover ${Specifications} {
        opacity: 1;
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

const ImageGallery = ({images}) => {
    const [ isLightboxOpen, setLightboxOpen ] = useState(false);
    const [ photoIndex, setPhotoIndex ] = useState(0);

    return (
        <>
            <Flex height="200px">
                {images.map((img, index) =>
                    <GalleryItem key={img.id} onClick={() => {setPhotoIndex(index); setLightboxOpen(true)}} width="25%" height="100%">
                        <Img fluid={img.fluid} />
                    <ItemDescription justifyCenter alignCenter column>
                        {//img.description
                        }
                        description
                    </ItemDescription>
                    </GalleryItem>
                )}
            </Flex>
            {isLightboxOpen && (
            <Lightbox
                mainSrc={images[photoIndex].file.url}
                nextSrc={images[(photoIndex + 1) % images.length].file.url}
                prevSrc={images[(photoIndex + images.length - 1) % images.length].file.url}
                onCloseRequest={() => setLightboxOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + images.length + 1) % images.length)}
            />
            )}
        </>
    );
};

export default ImageGallery;