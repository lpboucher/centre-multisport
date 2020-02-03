import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Flex from '../../structural/Flex';
import SocialIcon from './SocialIcon';
import Button from '../../generic/Button';

import FB from '../../assets/image/iconmonstr-facebook-5.svg';
import IG from '../../assets/image/iconmonstr-instagram-15.svg';

const StyledButton = styled(Button)`
    background: ${({theme}) => theme.primaryDark};
    border: none;
    margin: 0;
    padding: 2px;

    &:hover {
        background: ${({theme}) => theme.primaryDark};
        border: none;
    }
`

const SocialButton = () => {
    return (
        <StyledButton>
            <Link to="/en/social">
                <Flex>
                    <SocialIcon link="http://www.facebook.com" width="30px">
                    <FB width={'30px'} fill={'#DCDCDC'}/>
                    </SocialIcon>
                    <SocialIcon link="http://www.facebook.com" width="30px">
                    <IG width={'30px'} fill={'#DCDCDC'}/>
                    </SocialIcon>
                </Flex>
                </Link>
        </StyledButton>
    );
};

export default SocialButton;