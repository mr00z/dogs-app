import styled from 'styled-components';

const ButtonsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default ButtonsGrid;
