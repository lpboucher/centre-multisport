import React from 'react';

import RichText from '../../structural/RichText';

const About = ({title, content}) => {
    return (
        <RichText 
            title={title}
            content={content}
        />
    )
}

export default About;