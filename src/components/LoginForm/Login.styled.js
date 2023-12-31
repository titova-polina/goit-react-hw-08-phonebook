import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 20px 10px;
  max-width: 300px;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  margin-top: 30px;
`;

export const LoginInput = styled.input`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #6e6e6e;
  margin-top: 8px;
`;

export const LoginLabel = styled.label`
  font-size: 18px;
`;

export const LoginBtn = styled.button`
  border: 1px solid #858483;
  border-radius: 7px;
  cursor: pointer;
  padding: 5px 8px;
  max-width: 100px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #3c5080;
    border: 1px solid #3c5080;
    color: #fcf7e3;
  }
`;
