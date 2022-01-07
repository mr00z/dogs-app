import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import { IModal } from '.';

type ModalDiv = StyledComponent<'div', DefaultTheme, IModal, never> & {
  Header?: any;
  Content?: any;
  Body?: any;
  Footer?: any;
};

const Modal: ModalDiv = styled.div<IModal>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

Modal.Header = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
`;

Modal.Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  margin: 25vh auto;
  border-radius: 10px;
  width: 70vw;
`;

Modal.Body = styled.div`
  padding: 0.75rem 0;
`;

Modal.Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.black};
`;

export default Modal;
