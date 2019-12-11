import React, { useState, useEffect } from 'react';
import { buildUrl } from "react-instafeed";

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

    const instaRef = React.createRef(null);
    console.log(insta);
    return (
        <div id="instafeed">
            success!
        </div>
    );
};

export default InstagramFeed;