import React from 'react';

import RichText from '../../structural/RichText';
import ImageGallery from './ImageGallery';

const Article = ({title, content, gallery}) => (
    <>
        <RichText 
            title={title}
            content={content}
        />
        {gallery && gallery.length > 0 &&
        <ImageGallery images={gallery} />
        }
    </>
)

export default Article;