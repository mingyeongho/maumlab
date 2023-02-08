import styled from "styled-components";
import { Palette } from "../../styles/Variable";

export const Login = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 1.25rem;
`;

export const Input = styled.input`
  padding: 10px 14px;
  letter-spacing: 1px;
  font-size: 1rem;
  width: 220px;
  border-radius: 10px;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 100%;
  font-size: 1rem;
  font-weight: bolder;
  background-color: ${Palette.accent};
  border: none;
  outline: none;
  color: white;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const SendSignup = styled.span`
  transition: 0.3s color;
  &:hover {
    cursor: pointer;
    color: ${Palette.accent};
  }
`;

export const Error = styled.span``;
