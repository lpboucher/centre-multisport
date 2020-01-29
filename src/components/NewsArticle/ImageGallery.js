import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from "react-image-lightbox";
import Img from 'gatsby-image';

import Flex from '../../structural/Flex';
import ImageWrapper from '../../generic/ImageWrapper';

const GalleryItem = styled(ImageWrapper)`
    & > div {
        height: 100%;
    }
`

const ImageGallery = ({images}) => {
    const [ isLightboxOpen, setLightboxOpen ] = useState(false);
    const [ photoIndex, setPhotoIndex ] = useState(0);

    return (
        <>
            <Flex height="200px">
                {images.map((img, index) =>
                    <GalleryItem onClick={() => {setPhotoIndex(index); setLightboxOpen(true)}} width="25%" height="100%">
                        <Img key={img.id} fluid={img.fluid} />
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