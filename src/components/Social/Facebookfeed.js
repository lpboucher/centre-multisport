import React from 'react';

const FacebookFeed = ({query}) => {
    return (
        <div>
            <iframe src={`https://www.facebook.com/plugins/page.php?href=${query}tabs=timeline&width=300&height=600&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=193787871973148`} width="300" height="500" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
    );
};

export default FacebookFeed;