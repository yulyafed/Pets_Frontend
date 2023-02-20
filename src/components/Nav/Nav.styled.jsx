import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NaviList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media (min-width: 768px) {
    gap: 60px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 80px;
    margin-bottom: 0;
  }
`;

export const NaviLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.38;
  letter-spacing: 0.04em;
`;
