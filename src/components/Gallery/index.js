import React from 'react';
import { useIntl } from 'react-intl';
import Img from 'gatsby-image';

import Container from '../../structural/Container';
import Grid from '../../structural/Grid';

import { useGallery } from "../../hooks/use-gallery";

const Gallery = ({background, type}) => {
    const { locale } = useIntl();
    const gallery = useGallery({node_locale: [locale], location: [type]});
    return (    
    <Container background={background}>
        <Grid withFeatured>
            {gallery.images.map(img => 
                <Img key={`${type}-${img.id}`} fluid={img.fluid} />
            )}
        </Grid>
    </Container>
)}

export default Gallery;