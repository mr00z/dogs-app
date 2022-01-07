import styled from 'styled-components';
import { Text } from 'styled-typography';

const Header = styled.span`
  cursor: context-menu;
`;

export default function Logo() {
  return (
    <Header>
      <Text level={1}>Dogs 🐶</Text>
    </Header>
  );
}
