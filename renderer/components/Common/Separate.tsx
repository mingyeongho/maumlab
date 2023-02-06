import styled from "styled-components";

const S_Separate_X = styled.div`
  height: 1px;
  background-color: #555;
`;

const S_Separate_Y = styled.div`
  width: 1px;
  background-color: #555;
`;

export const Separate_X = () => {
  return <S_Separate_X />;
};

export const Separate_Y = () => {
  return <S_Separate_Y />;
};
