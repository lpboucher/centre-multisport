import React from 'react';

import RichText from '../../structural/RichText';
import Container from '../../structural/Container';

const About = ({title, content}) => {
    return (
    <Container background="primaryDark">
        <RichText 
            title={title}
            content={content}
        />
    </Container>
    )
}

export default About;