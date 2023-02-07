import styled from "styled-components";
import { Palette } from "../../../../../styles/Variable";

export const PeerChat = styled.div`
  display: flex;
  justify-content: flex-start;
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
  border-radius: 0 10px 10px 10px;
`;

export const Timestamp = styled.span``;
