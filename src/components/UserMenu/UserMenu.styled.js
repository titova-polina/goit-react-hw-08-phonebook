import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  max-width: 200px;
  margin-right: auto;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const LogoutBtn = styled.button`
  border: 1px solid #858483;
  border-radius: 7px;
  cursor: pointer;
  padding: 5px 8px;
  margin-left: 10px;
  max-width: 100px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #d97d21;
    border: 1px solid #d97d21;
  }
`;
