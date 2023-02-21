import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ButtonElement = styled.li`

`;

export const FilterButton = styled(NavLink)`
  display: flex;
  align-items: flex-start;
  padding: 8px 28px;

  text-decoration: none;
  background-color: #ffffff;

  border: 2px solid #f59256;
  border-radius: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  color: #111111;
  &.active {
    background: #f59256;
    color: #ffffff;
  }
`;

export const AddPetButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #f59256;


  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #ffffff;

  border-radius: 50%;
  border: none;

  z-index: 100;


`;
export const AddPetText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  color: #111111;

  margin-right: 12px;
`;
