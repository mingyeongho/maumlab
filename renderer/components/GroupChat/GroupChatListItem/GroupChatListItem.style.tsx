import styled from "styled-components";
import { Palette } from "../../../styles/Variable";

export const GroupChatListItem = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #555;
  }
`;

export const Thumbnail = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${Palette.accent};
  border-radius: 16px;
`;

export const MessageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Nickname = styled.span`
  font-size: 0.9rem;
`;

export const Message = styled.span`
  border-radius: 0 10px 10px 10px;
  color: #999;
  font-size: 0.875rem;
`;

export const Timestamp = styled.span`
  font-size: 0.8rem;
  color: #777;
`;
