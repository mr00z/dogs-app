import styled from 'styled-components';

const DogImage = styled.img`
  margin: 0.75rem;

  max-height: 55vh;
  width: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 90%;
    height: auto;
  }
`;

export default DogImage;
