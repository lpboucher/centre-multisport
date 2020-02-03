import React from 'react';

import RichText from '../../structural/RichText';
import ImageGallery from './ImageGallery';

const Article = ({title, content, gallery, date}) => (
    <>
        <RichText 
            title={title}
            content={content}
            date={date}
        />
        {gallery && gallery.length > 0 &&
        <ImageGallery images={gallery} />
        }
    </>
)

export default Article;