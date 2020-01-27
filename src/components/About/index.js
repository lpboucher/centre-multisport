import React from 'react';
import {useIntl} from 'react-intl';

import RichText from '../../structural/RichText';

import { useAbout } from "../../hooks/use-about";

const About = () => {
    const { locale } = useIntl();
    const about = useAbout({node_locale: [locale], slug: 'about'});
    return (
        <RichText 
            title={about.title}
            content={about.content}
        />
    )
}

export default About;