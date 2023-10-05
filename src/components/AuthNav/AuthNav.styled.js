import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapperlink = styled.div`
  display: flex;
  gap: 8px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #383838;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #141414;
  }
`;
