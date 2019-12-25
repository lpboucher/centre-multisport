import React from 'react';
import {useIntl} from 'react-intl';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';
import MobileDisplay from '../../structural/MobileWrapper';

import { useBanner } from "../../hooks/use-banner"

const OrgDesc = () => {
    const { locale } = useIntl();
    const banners = useBanner({node_locale: [locale]});
    const activeBanner = banners.find(banner => banner.appearsOn.includes('index'));
    return (
        <MobileDisplay showMobile>
            <Container background="primaryDark">
                <Heading large color="primaryLight">{activeBanner.tagline}</Heading>
            </Container>
        </MobileDisplay>
    )
}

export default OrgDesc;