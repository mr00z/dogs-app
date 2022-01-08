import styled from 'styled-components';

const ButtonGroup = styled.div`
  > button {
    &:first-child {
      margin-right: 0.5rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    > button {
      width: 100%;

      &:first-child {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default ButtonGroup;
