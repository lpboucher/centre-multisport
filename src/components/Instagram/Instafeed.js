import React, { useState, useEffect } from 'react';
import { buildUrl } from "react-instafeed";

import Grid from '../../structural/Grid';
import ImageWrapper from '../../generic/ImageWrapper';

const InstagramFeed = () => {
    const [hasError, setErrors] = useState(false);
    const [insta, setInsta] = useState({});
    const options = {
        clientId: `${process.env.GATSBY_INSTAGRAM_CLIENT_ID}`,
        accessToken:`${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}`,
        get: 'user',
        resolution: 'thumbnail',
        sortBy: 'most-recent',
        userId: `${process.env.GATSBY_INSTAGRAM_USER_ID}`,
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
        <Grid noGap columns={4}>
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