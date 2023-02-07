import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const Logout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${Palette.accent};
  color: white;
  padding: 12px;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`;
