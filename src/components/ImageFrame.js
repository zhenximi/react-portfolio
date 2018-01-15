import styled from 'styled-components';

const ImageFrame = styled.div`
  background: #f0f0f0;
  background-image: url(${props => props.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default ImageFrame;
