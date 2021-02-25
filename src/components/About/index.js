import React from 'react';

import RichText from '../../structural/RichText';
import Container from '../../structural/Container';

import "../../style/main.css";

const About = ({title, content}) => {
    return (
    <Container className="about" background="primaryDark">
        <RichText 
            title={title}
            content={content}
        />
    </Container>
    )
}

export default About;
