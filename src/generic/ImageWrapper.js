import styled from 'styled-components';

const ImageWrapper = styled.div`
    width: ${({ width }) => width ? width : 'inherit'};
    height: ${({ height }) => height ? height : 'inherit'};
    margin: 0 auto;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default ImageWrapper;