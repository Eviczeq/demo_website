import React from 'react'
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss'
import myImage from '../../assets/logo.png';

const Navigation = styled.nav`
  z-index: 10;
  background-color: #d3d3d396;
  position: sticky;
  top: 10px;
  display: flex;
  height: 10vh;
  `;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  flex: 2;
`;
const Li = styled.li`
  text-decoration: none;
  border-radius: 18px;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;

`;
const Container = styled.div`
justify-content: center;
  display: flex;
  flex: 1;
`
 const Logo = styled.h1`
color: red;
  font-weight: bold;
  font-size: 1.5rem;

  
`;
 const LogoImg = styled.img`
  width: 20%;
  margin-right: 20px;
  
`;
const Navbar = () => {


  return (
    <Navigation >
      <Container>
         <LogoImg src={myImage}/>
          <Link to='/' style={{textDecoration:'none', color:'black'}}>
            <Logo>火災保険</Logo>
          </Link>
      </Container>
     
        <Ul>
          <NavLink to='/' className={({ isActive }) => isActive ? "link active" : "link"} >
            <Li>
              Top
            </Li>
          </NavLink>
          <NavLink to='/about'className={({ isActive }) => isActive ? "link active" : "link"} >
            <Li>
            会社案内
            </Li>
          </NavLink>
          <NavLink to='/inquiry'className={({ isActive }) => isActive ? "link active" : "link"} >
            <Li>
              お問合わせ
            </Li>
          </NavLink>
          <NavLink to='/estimate'className={({ isActive }) => isActive ? "link active" : "link"} >
            <Li>
            火災保険試算
            </Li>
          </NavLink>        
          <NavLink to='/question'className={({ isActive }) => isActive ? "link active" : "link"} >
           <Li>
            火災保険Q＆A
            </Li>
          </NavLink>
        </Ul>
      </Navigation>
  )
}

export default Navbar