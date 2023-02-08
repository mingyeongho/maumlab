import styled from "styled-components";
import { Palette } from "../../../styles/Variable";

export const GroupChatForm = styled.form`
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  padding: 6px;
  border: none;
  outline: none;
  background-color: inherit;
  color: white;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  padding: 6px;
  background-color: ${Palette.accent};
  color: white;
  border: none;
  outline: none;
  font-size: 1.25rem;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`;
