import styled from "styled-components";
import { Palette } from "../../../../../styles/Variable";

export const MyChat = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${Palette.accent};
  border-radius: 16px;
`;

export const Message = styled.span`
  background-color: #666;
  padding: 6px;
  border-radius: 10px 0 10px 10px;
`;

export const Timestamp = styled.span``;
