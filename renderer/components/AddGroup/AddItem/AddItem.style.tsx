import styled from "styled-components";
import { Palette } from "../../../styles/Variable";

export const AddItem = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  display: none;
  &:checked {
    & + label {
      background-color: #2962ff;
      border-color: #2962ff;
    }
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  border: 2px solid #666;
  border-radius: 50%;
`;

export const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${Palette.accent};
  border-radius: 16px;
`;

export const Profile = styled.div`
  font-size: 1.1rem;
`;
