import styled from 'styled-components';

const Jumbotron = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 0;
    position: relative;
    background-color: ${({background, theme}) => background ? theme[background] : 'none'}
`;

export default Jumbotron;