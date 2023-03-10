import styled from "styled-components";
import { Palette } from "../../../../styles/Variable";

export const Friend = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;

  &:hover {
    background-color: #555;
    cursor: pointer;
  }
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
