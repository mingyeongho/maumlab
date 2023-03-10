import styled from "styled-components";
import { Palette } from "../../../styles/Variable";

export const GroupProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${Palette.accent};
  border-radius: 16px;
`;

export const Nickname = styled.div`
  font-size: 1.1rem;
`;
