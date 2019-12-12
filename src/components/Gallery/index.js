import React from 'react';

import Container from '../../structural/Container';
import Grid from '../../structural/Grid';

const Gallery = ({background}) => (
    <Container background={background}>
        <Grid withFeatured>
            <p style={{backgroundColor: 'green'}}>1</p>
            <p style={{backgroundColor: 'red'}}>2</p>
            <p style={{backgroundColor: 'blue'}}>3</p>
            <p style={{backgroundColor: 'yellow'}}>4</p>
        </Grid>
    </Container>
)

export default Gallery;