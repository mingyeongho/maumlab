import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const GroupChatList = styled.main`
  padding: 16px;
  position: relative;
`;

export const EmptyChatRoom = styled.span``;

export const AddButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  right: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${Palette.accent};
  color: white;
  font-size: 2.5rem;

  &:hover {
    cursor: pointer;
  }
`;
