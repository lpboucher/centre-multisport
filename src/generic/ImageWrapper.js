import styled from 'styled-components';

const ImageWrapper = styled.div`
    width: ${({ width }) => width ? width : 'inherit'};
    height: ${({ height }) => height ? height : 'inherit'};
    margin: 0 auto;
`;

export default ImageWrapper;