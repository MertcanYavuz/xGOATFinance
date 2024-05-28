import styled from "styled-components";

export const Group1 = styled.div`
  background-size: 100% 100%;
  background-position: center;
  background-image: url("https://static.overlay-tech.com/assets/0b11976f-9a9a-48ab-8841-41b774502db9.png");
  padding: 139px 302px 566px 274px;
  display: flex;
  align-items: flex-start;
`;
export const ButtonTwo = styled.div`
  background-color: ${props => props.theme.colors.black};
  border-radius: 8px;
  padding: 10px 141px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  align-self: stretch;
`;
export const Button = styled.p`
  color: ${props => props.theme.colors.white};
  font-family: ${props =>
    props.theme.fonts.inter14Medium.family};
  font-size: ${props =>
    props.theme.fonts.inter14Medium.size};
  font-weight: ${props =>
    props.theme.fonts.inter14Medium.weight};
  line-height: ${props =>
    props.theme.fonts.inter14Medium.lineHeight};
`;