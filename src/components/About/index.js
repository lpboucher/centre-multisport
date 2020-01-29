import React from 'react';
import {useIntl} from 'react-intl';

import RichText from '../../structural/RichText';

import { useAbout } from "../../hooks/use-about";

const About = ({title, content}) => {
    const { locale } = useIntl();
    const about = useAbout({node_locale: [locale], slug: 'about'});
    return (
        <RichText 
            title={title}
            content={content}
        />
    )
}

export default About;