import styled from 'styled-components';

const ImageWrapper = styled.div`
    width: ${({ width }) => width ? width : 'inherit'};
    height: ${({ height }) => height ? height : 'inherit'};
    margin: ${({margin}) => margin ? margin : '0 auto'};
    max-width: ${({ maxW }) => maxW ? maxW : 'none'};
    max-height: ${({ maxH }) => maxH ? maxH : 'none'};

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default ImageWrapper;