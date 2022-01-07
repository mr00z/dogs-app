import styled from 'styled-components';

import Logo from './Logo';

export const NAVBAR_HEIGHT = '30px';
export const NAVBAR_PADDING = '1.5rem';

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  height: ${NAVBAR_HEIGHT};
  padding: ${NAVBAR_PADDING};
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo />
    </Nav>
  );
}
