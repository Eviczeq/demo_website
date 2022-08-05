import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

const Navigation = styled.nav`
  position: sticky;
  top: 0px;
  `;
const Ul = styled.ul`
  padding: 12px 180px;
  background: white;
  color: white;
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
`;
const Li = styled.li`
  color: black;
  text-decoration: none;
  border-radius: 18px;
  padding: 6px 24px;
  font-size: 18px;
  cursor: pointer;
  &:hover{
    background-color: red;

  }
`;
const Navbar = () => {
  let activeStyle = {
    borderRadius: "16px",
    backgroundColor: "red"
  };

  return (
    <Navigation >
        <Ul>
          <NavLink to='/' className='link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <Li>
              Top
            </Li>
          </NavLink>
          <NavLink to='/about'className='link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <Li>
            会社案内
            </Li>
          </NavLink>
          <NavLink to='/inquiry'className='link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <Li>
              お問合わせ
            </Li>
          </NavLink>
          <NavLink to='/estimate'className='link'style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <Li>
            火災保険試算
            </Li>
          </NavLink>        
          <NavLink to='/question'className='link'style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }> 
           <Li>
            火災保険Q＆A
            </Li>
          </NavLink>
        </Ul>
      </Navigation>
  )
}

export default Navbar