import React from 'react';
import myImage from '../../assets/logo.png';
import {Container,Wrapper, Center, LogoImg ,Logo, Right} from './header-styled'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
 const LogoImgBig = styled.img`
  width: 30%;
`;
const Header = () => {
  return (
    <Container>
      <Wrapper>

        <Center>
          <LogoImg src={myImage}/>
          <Link to='/' style={{textDecoration:'none', color:'black'}}>
            <Logo>火災保険</Logo>
          </Link>
        </Center> 
        <Right>
        <LogoImgBig src={myImage}/>
        </Right>
      </Wrapper>
      
    </Container>
  )
}

export default Header