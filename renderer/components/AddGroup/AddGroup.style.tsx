import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const AddGroup = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Subject = styled.span`
  color: ${Palette.accent};
`;

export const List = styled.div`
  flex: 1;
`;

export const Button = styled.button`
  background-color: ${Palette.accent};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 1.125rem;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`;
