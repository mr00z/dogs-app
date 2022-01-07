import styled from 'styled-components';

import { NAVBAR_HEIGHT, NAVBAR_PADDING } from 'components/Navbar/Navbar';

export const Main = styled.main`
  height: calc(100% - (${NAVBAR_HEIGHT} + 2 * (${NAVBAR_PADDING})));
  padding: 1rem;
`;
