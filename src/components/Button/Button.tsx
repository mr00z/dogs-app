import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const LIGHTEN_PERCENTAGE = 0.2;

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
  border: 2px solid;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  border-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  &:hover {
    background-color: ${(props) => lighten(LIGHTEN_PERCENTAGE, props.theme.colors.primary)};
    border-color: ${(props) => lighten(LIGHTEN_PERCENTAGE, props.theme.colors.primary)};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  border-color: ${(props) => props.theme.colors.secondary};
  &:hover {
    background-color: ${(props) => darken(LIGHTEN_PERCENTAGE, props.theme.colors.secondary)};
    border-color: ${(props) => darken(LIGHTEN_PERCENTAGE, props.theme.colors.secondary)};
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-color: ${(props) => props.theme.colors.tertiary};
  &:hover {
    background-color: ${(props) => darken(LIGHTEN_PERCENTAGE, props.theme.colors.tertiary)};
    border-color: ${(props) => darken(LIGHTEN_PERCENTAGE, props.theme.colors.tertiary)};
  }
`;
