import styled from "styled-components";

export const Navs = styled.nav`
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: #404040;
`;

export const Gnb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Logout = styled.div``;

export const A = styled.a`
  cursor: pointer;
  &:hover {
    & > svg {
      fill: #b7b7b7;
      stroke: #b7b7b7;
    }
  }
`;
