import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Btn = styled.button`
  border: 1px solid #858483;
  border-radius: 7px;
  cursor: pointer;
  padding: 5px 8px;
  margin-left: 8px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #3c5080;
    border: 1px solid #3c5080;
    color: #fcf7e3;
  }
`;
