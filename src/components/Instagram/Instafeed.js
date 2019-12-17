import React, { useState, useEffect } from 'react';
import { buildUrl } from "react-instafeed";

import Grid from '../../structural/Grid';
import ImageWrapper from '../../generic/ImageWrapper';

const InstagramFeed = () => {
    const [hasError, setErrors] = useState(false);
    const [insta, setInsta] = useState({});
    const options = {
        clientId: '33d057cb82d742b2ab2b467324f29ac2',
        accessToken:'1370915852.33d057c.2b876c662d384e958d178bcf704463a1',
        get: 'user',
        resolution: 'thumbnail',
        sortBy: 'most-recent',
        userId: 1370915852,
        limit: 4
      };

    const fetchData = async () => {
        const res = await fetch(buildUrl(options));
        res
            .json()
            .then(res => setInsta(res.data))
            .catch(err => setErrors(err));
    }
    
    useEffect(() => {
        fetchData();
    },[]);
    console.log(insta);
    return (
        <Grid noGap columns={4} rows={`calc(100vw / 4)`}>
            {insta && insta.length > 0 &&
            <>
                {insta.map(item => 
                    <ImageWrapper key={item.id}>
                        <img src={item.images.standard_resolution.url}></img>
                    </ImageWrapper>
                )}
            </>
            }
        </Grid>
    );
};

export default InstagramFeed;