import styled from 'styled-components';

const Video = styled.video`
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100%;
    opacity: 0.5;
    background-color: ${({theme}) => theme.primaryDark};
    background-size: cover;
`;

export default Video;